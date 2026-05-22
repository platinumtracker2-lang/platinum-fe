// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import { STOCK_NEWS } from "@/src/api/platinumAPI";
// const StockNews = () => {
//   const [newsData, setNewsData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await fetch(STOCK_NEWS);
//         const data = await response.json();
//         // Ensure we're working with an array
//         setNewsData(Array.isArray(data) ? data : []);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching news:", error);
//         setNewsData([]);
//         setLoading(false);
//       }
//     };

//     fetchNews();
//   }, []);

//   // Function to format date
//   const formatDate = (dateString) => {
//     const options = { year: "numeric", month: "short", day: "numeric" };
//     return new Date(dateString).toLocaleDateString("en-US", options);
//   };

//   if (loading) {
//     return <div className="text-center py-8">Loading...</div>;
//   }

//   // Ensure newsData is an array and has content
//   const validNewsData = Array.isArray(newsData) ? newsData : [];

//   // Show message when no news is available
//   if (validNewsData.length === 0) {
//     return (
//       <div>
//         <h1 className="text-[21px] cambay font-bold mb-5 border-b border-black/10 pb-2">
//           Platinum Stock News
//         </h1>
//         <div className="text-center py-12 text-gray-600">
//           No news available at this time
//         </div>
//       </div>
//     );
//   }

//   const featuredNews = validNewsData[0];
//   const remainingNews = validNewsData.slice(1, 5);

//   return (
//     <div>
//       <h1 className="text-[21px] cambay font-bold mb-5 border-b border-black/10 pb-2">
//         Platinum Stock News
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-9 gap-6">
//         {/* Featured News Section */}
//         {featuredNews && (
//           <div className="col-span-5">
//             <a href={featuredNews.url} target="_blank" className="block">
//               <div className="overflow-hidden group cursor-pointer">
//                 <img
//                   src={featuredNews.image_url || "/no-image.png"}
//                   alt={featuredNews.title}
//                   className="w-full h-[300px] object-cover rounded-sm"
//                 />
//                 <div className="pt-4">
//                   <div className="mb-2">
//                     <div className="flex gap-x-3">
//                       <span className="bg-[#00AEEF] text-[11px] rounded-sm text-white px-2 py-1">
//                         {featuredNews.ticker}
//                       </span>
//                     </div>
//                   </div>

//                   <h3 className="text-[18px] font-medium leading-6 mb-2 group-hover:underline">
//                     {featuredNews.title}
//                   </h3>
//                   <div className="text-[14px] text-black1/60 space-x-2">
//                     <span>{formatDate(featuredNews.date)}</span>
//                     <span>|</span>
//                     <span>{featuredNews.provider}</span>
//                   </div>
//                 </div>
//               </div>
//             </a>
//           </div>
//         )}

//         {/* Remaining News Section */}
//         {remainingNews.length > 0 && (
//           <div className="col-span-4 space-y-3">
//             {remainingNews.map((news) => (
//               <a
//                 href={news.url}
//                 target="_blank"
//                 key={news.id}
//                 className="flex items-center overflow-hidden group cursor-pointer border-b border-black/10 pb-2"
//               >
//                 <div>
//                   <div className="mb-2">
//                     <div className="flex gap-x-3">
//                       <span className="bg-[#00AEEF] text-[11px] rounded-sm text-white px-2 py-1">
//                         {news.ticker}
//                       </span>
//                     </div>
//                   </div>

//                   <h3 className="text-[15px] leading-6 mb-1 font-medium group-hover:underline">
//                     {news.title.length > 90
//                       ? `${news.title.slice(0, 90)}...`
//                       : news.title}
//                   </h3>
//                   <div className="text-[12px] text-black1/60">
//                     {formatDate(news.date)}
//                   </div>
//                 </div>
//               </a>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default StockNews;

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { STOCK_NEWS } from "@/src/api/platinumAPI";

const StockNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        console.log("Fetching stock news from:", STOCK_NEWS);
        const response = await fetch(STOCK_NEWS);

        if (!response.ok) {
          console.warn(
            `Stock news API returned ${response.status} — showing empty state`,
          );
          setNewsData([]);
          setLoading(false);
          return;
        }

        const data = await response.json();
        console.log("Stock news data:", data);

        // Process the data to add today's date for missing dates
        const processedData = Array.isArray(data)
          ? data.map((news) => ({
              ...news,
              date: news.date || new Date().toISOString(),
            }))
          : [];
        setNewsData(processedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching stock news:", error);
        setError(error.message);
        setNewsData([]);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Function to format date
  const formatDate = (dateString) => {
    if (!dateString) {
      return new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    }

    try {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(dateString).toLocaleDateString("en-US", options);
    } catch (error) {
      console.warn("Invalid date format:", dateString);
      return new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    }
  };

  if (loading) {
    return (
      <div>
        <h1 className="text-[17px] md:text-[19px] cambay font-bold mb-3 border-b border-black/10 pb-2">
          Platinum Stock News
        </h1>
        <div className="text-center py-6 text-gray-500">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1 className="text-[17px] md:text-[19px] cambay font-bold mb-3 border-b border-black/10 pb-2">
          Platinum Stock News
        </h1>
        <div className="text-center py-6 text-red-500 text-sm">
          Error loading stock news: {error}
        </div>
      </div>
    );
  }

  const validNewsData = Array.isArray(newsData) ? newsData : [];

  if (validNewsData.length === 0) {
    return (
      <div>
        <h1 className="text-[17px] md:text-[19px] cambay font-bold mb-3 border-b border-black/10 pb-2">
          Platinum Stock News
        </h1>
        <div className="text-center py-6 text-gray-500 text-sm">
          No stock news available at this time
        </div>
      </div>
    );
  }

  const featuredNews = validNewsData[0];
  const remainingNews = validNewsData.slice(1, 5);

  return (
    <div>
      <h1 className="text-[17px] md:text-[19px] cambay font-bold mb-3 border-b border-black/10 pb-2">
        Platinum Stock News
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-9 gap-3 md:gap-5">
        {/* Featured News Section */}
        {featuredNews && (
          <div className="col-span-1 md:col-span-5">
            <a href={featuredNews.url} target="_blank" className="block group cursor-pointer">
              <img
                src={featuredNews.image_url || "/no-image.png"}
                alt={featuredNews.title}
                className="w-full h-44 sm:h-52 md:h-56 object-cover rounded-sm"
              />
              <div className="pt-2">
                <div className="flex gap-2 mb-1 flex-wrap">
                  <span className="bg-[#00AEEF] text-[10px] rounded-sm text-white px-2 py-0.5">
                    {featuredNews.ticker}
                  </span>
                  {featuredNews.company_name && (
                    <span className="bg-gray-100 text-[10px] rounded-sm text-gray-700 px-2 py-0.5">
                      {featuredNews.company_name}
                    </span>
                  )}
                </div>
                <h3 className="text-[15px] md:text-[16px] font-medium leading-snug mb-1 group-hover:underline">
                  {featuredNews.title}
                </h3>
                {featuredNews.summary && (
                  <p className="text-[13px] text-gray-600 mb-1 line-clamp-2">
                    {featuredNews.summary.substring(0, 130)}...
                  </p>
                )}
                <div className="text-[12px] text-gray-500">
                  {formatDate(featuredNews.date)}
                  {featuredNews.provider && <span> · {featuredNews.provider}</span>}
                </div>
              </div>
            </a>
          </div>
        )}

        {/* Remaining News Section */}
        {remainingNews.length > 0 && (
          <div className="col-span-1 md:col-span-4 space-y-2">
            {remainingNews.map((news, index) => (
              <a
                href={news.url}
                target="_blank"
                key={news.id || index}
                className="flex group cursor-pointer border-b border-black/10 pb-2 last:border-b-0 last:pb-0"
              >
                <div className="flex-1">
                  <span className="bg-[#00AEEF] text-[10px] rounded-sm text-white px-2 py-0.5 mb-1 inline-block">
                    {news.ticker}
                  </span>
                  <h3 className="text-[13px] leading-snug font-medium group-hover:underline">
                    {news.title?.length > 90 ? `${news.title.slice(0, 90)}...` : news.title}
                  </h3>
                  {news.company_name && (
                    <p className="text-[11px] text-gray-600 mt-0.5">{news.company_name}</p>
                  )}
                  <div className="text-[11px] text-gray-500 mt-0.5">{formatDate(news.date)}</div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StockNews;
