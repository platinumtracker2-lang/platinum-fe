import { useEffect, useState } from "react";
import Link from "next/link";
import { STOCK_NEWS } from "@/src/api/platinumAPI";

const MostPopularNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching news articles from the local database API
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await fetch(STOCK_NEWS);

        if (!response.ok) {
          console.warn(
            `Stock news API returned ${response.status} — showing empty state`,
          );
          setNews([]);
          setLoading(false);
          return;
        }

        const data = await response.json();
        console.log("Most Popular News data:", data);

        // Slice to get news starting from 6th item and limit to 8 items
        setNews(Array.isArray(data) ? data.slice(10, 18) : []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching most popular news:", error);
        setError(error.message);
        setNews([]);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="mb-2">
        <h2 className="text-[17px] md:text-[19px] font-bold cambay text-black1/80 border-b border-gray-300 pb-2 mb-3">
          Most Popular
        </h2>
        <div className="text-center py-6 text-gray-500 text-sm">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mb-2">
        <h2 className="text-[17px] md:text-[19px] font-bold cambay text-black1/80 border-b border-gray-300 pb-2 mb-3">
          Most Popular
        </h2>
        <div className="text-center py-6 text-red-500 text-sm">Error loading news: {error}</div>
      </div>
    );
  }

  if (news.length === 0) {
    return (
      <div className="mb-2">
        <h2 className="text-[17px] md:text-[19px] font-bold cambay text-black1/80 border-b border-gray-300 pb-2 mb-3">
          Most Popular
        </h2>
        <div className="text-center py-6 text-gray-500 text-sm">No popular news available at this time</div>
      </div>
    );
  }

  return (
    <div className="mb-2 md:mb-4">
      <h2 className="text-[17px] md:text-[19px] font-bold cambay text-black1/80 border-b border-gray-300 pb-2 mb-3">
        Most Popular
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
        {news.map((item, index) => (
          <Link
            href={item.url}
            target="_blank"
            key={item.id || index}
            className="flex items-center group w-full border-b border-gray-200 pb-3"
          >
            <div className="flex flex-col items-center justify-center mr-3 min-w-[28px]">
              <span className="text-2xl font-bold text-black/25 group-hover:text-[#00AEEF]">
                {index + 1}
              </span>
            </div>
            <div className="flex-1 flex flex-col min-w-0">
              {item.ticker && (
                <span className="bg-[#00AEEF] text-[9px] rounded-sm text-white px-1.5 py-0.5 mb-1 self-start">
                  {item.ticker}
                </span>
              )}
              <h3 className="text-[13px] group-hover:underline font-medium line-clamp-2 leading-snug">
                {item.title}
              </h3>
              {item.company_name && (
                <p className="text-[11px] text-gray-600 mt-0.5">{item.company_name}</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MostPopularNews;
