// Fetches latest posts from platinum/PGM-focused Substack RSS feeds

const PLATINUM_SUBSTACKS = [
  { name: 'PLGTM Insider',           rss: 'https://plgtm.substack.com/feed' },
  { name: 'Small Cap Treasures',     rss: 'https://smallcaptreasures.substack.com/feed' },
  { name: 'The Oregon Group',        rss: 'https://theoregongroup.substack.com/feed' },
  { name: 'Alberto AG',              rss: 'https://albertoag.substack.com/feed' },
  { name: 'Rock & Turner',           rss: 'https://rockandturner.substack.com/feed' },
  { name: 'Amanda Van Dyke',         rss: 'https://amandavandyke.substack.com/feed' },
];

// Minimal XML parser — pulls out <item> blocks and extracts key fields
function parseRSS(xml) {
  const items = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;

  while ((match = itemRegex.exec(xml)) !== null) {
    const block = match[1];

    const get = (tag) => {
      // Handle CDATA and plain text
      const re = new RegExp(`<${tag}[^>]*>(?:<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>|([\\s\\S]*?))<\\/${tag}>`, 'i');
      const m = re.exec(block);
      return m ? (m[1] ?? m[2] ?? '').trim() : '';
    };

    const title   = get('title');
    const link    = get('link') || get('guid');
    const pubDate = get('pubDate');
    const desc    = get('description');
    const enclosure = /<enclosure[^>]+url="([^"]+)"/.exec(block);
    const mediaUrl  = /<media:content[^>]+url="([^"]+)"/.exec(block);
    const imgInDesc = /<img[^>]+src="([^"]+)"/.exec(desc);

    const image =
      (enclosure && enclosure[1]) ||
      (mediaUrl  && mediaUrl[1])  ||
      (imgInDesc && imgInDesc[1]) ||
      null;

    // Strip HTML from description for snippet
    const snippet = desc
      .replace(/<[^>]*>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 120);

    if (title && link) {
      items.push({ title, link, pubDate, snippet, image });
    }
  }

  return items;
}

async function fetchFeed(source) {
  try {
    const res = await fetch(source.rss, {
      headers: { 'User-Agent': 'PGMTracker/1.0 RSS Reader' },
      signal: AbortSignal.timeout(6000),
    });
    if (!res.ok) return [];
    const xml = await res.text();
    const items = parseRSS(xml);
    return items.slice(0, 3).map((item, i) => ({
      id: `${source.name}-${i}`,
      title: item.title,
      url: item.link,
      snippet: item.snippet,
      image: item.image,
      date: item.pubDate ? new Date(item.pubDate).toISOString() : null,
      source: source.name,
    }));
  } catch {
    return [];
  }
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Fetch all feeds in parallel
    const results = await Promise.allSettled(
      PLATINUM_SUBSTACKS.map((s) => fetchFeed(s))
    );

    const allPosts = results
      .filter((r) => r.status === 'fulfilled')
      .flatMap((r) => r.value);

    // Sort by date descending, most recent first
    allPosts.sort((a, b) => {
      if (!a.date) return 1;
      if (!b.date) return -1;
      return new Date(b.date) - new Date(a.date);
    });

    // Cache for 30 minutes
    res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=3600');
    return res.status(200).json(allPosts.slice(0, 10));
  } catch (error) {
    console.error('Substacks RSS error:', error);
    return res.status(500).json({ message: 'Failed to fetch substacks', error: error.message });
  }
}
