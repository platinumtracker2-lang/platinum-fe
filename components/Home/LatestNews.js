// import React, { useState, useEffect } from "react";
// import Loader from "../Loader";
// import { COPPER_NEWS } from "@/src/api/platinumAPI";

// const LatestNews = () => {
//   const [newsData, setNewsData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await fetch(COPPER_NEWS);
//         if (!response.ok) {
//           throw new Error("Failed to fetch news");
//         }
//         const data = await response.json();
//         if (!data || data.length === 0) {
//           throw new Error("No news available");
//         }
//         setNewsData(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNews();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-32">
//         <span className="ml-3 text-gray-800 font-semibold mx-auto">
//           <Loader />
//         </span>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-32 text-red-500">
//         <span>Error: {error}</span>
//       </div>
//     );
//   }

//   return (
//     <div className="">
//       <h1 className="text-[21px] cambay font-bold mb-5 border-b border-black/10 pb-2">
//         Latest Platinum News
//       </h1>

//       <div className="flex flex-wrap md:flex-nowrap ">
//         {/* Full News Section */}
//         <div className="w-full md:w-[65%] space-y-4">
//           {newsData.slice(0, 5).map((news, index) => (
//             <a
//               key={index}
//               href={news.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-white rounded-sm overflow-hidden block group transition-shadow duration-300"
//             >
//               <div>
//                 <h2 className="group-hover:underline font-medium text-[15px] text-primary leading-6 mt-1 line-clamp-1">
//                   {news.title}
//                 </h2>
//                 <p className="text-gray-500 text-xs mt-2">
//                   {new Date(news.date).toLocaleDateString("en-US", {
//                     month: "short",
//                     day: "numeric",
//                     year: "numeric",
//                   })}
//                 </p>
//               </div>
//             </a>
//           ))}
//         </div>

//         {/* Right Side News */}
//         <div className="w-full md:w-[35%] grid grid-cols-1 sm:grid-cols-2 gap-4">
//           {/* Top Two News */}
//           {newsData.slice(6, 10).map((news, index) => (
//             <a
//               key={index}
//               href={news.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-white rounded-sm overflow-hidden block group transition-shadow duration-300"
//             >
//               <div>
//                 <h2 className="group-hover:underline font-medium text-[15px] text-primary mt-1 leading-6">
//                   {news.title.length > 43
//                     ? `${news.title.substring(0, 43)}...`
//                     : news.title}
//                 </h2>
//                 <p className="text-gray-500 text-xs mt-2">
//                   {new Date(news.date).toLocaleDateString("en-US", {
//                     month: "short",
//                     day: "numeric",
//                     year: "numeric",
//                   })}
//                 </p>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LatestNews;

// import React, { useState, useEffect } from "react";
// import Loader from "../Loader";
// import { COPPER_NEWS } from "@/src/api/platinumAPI";

// const LatestNews = () => {
//   const [newsData, setNewsData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await fetch(COPPER_NEWS);
//         if (!response.ok) {
//           throw new Error("Failed to fetch news");
//         }
//         const data = await response.json();
//         if (!data || data.length === 0) {
//           throw new Error("No news available");
//         }
//         setNewsData(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNews();
//   }, []);

//   // Function to format date safely
//   const formatDate = (dateString) => {
//     if (!dateString) return "";

//     try {
//       return new Date(dateString).toLocaleDateString("en-US", {
//         month: "short",
//         day: "numeric",
//         year: "numeric",
//       });
//     } catch (error) {
//       console.warn("Invalid date format:", dateString);
//       return "";
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-32">
//         <span className="ml-3 text-gray-800 font-semibold mx-auto">
//           <Loader />
//         </span>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-32 text-red-500">
//         <span>Error: {error}</span>
//       </div>
//     );
//   }

//   return (
//     <div className="">
//       <h1 className="text-[21px] cambay font-bold mb-5 border-b border-black/10 pb-2">
//         Latest Platinum News
//       </h1>

//       <div className="flex flex-wrap md:flex-nowrap ">
//         {/* Full News Section */}
//         <div className="w-full md:w-[65%] space-y-4">
//           {newsData.slice(0, 5).map((news, index) => (
//             <a
//               key={index}
//               href={news.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-white rounded-sm overflow-hidden block group transition-shadow duration-300"
//             >
//               <div>
//                 <h2 className="group-hover:underline font-medium text-[15px] text-primary leading-6 mt-1 line-clamp-1">
//                   {news.title || ""}
//                 </h2>
//                 <p className="text-gray-500 text-xs mt-2">
//                   {formatDate(news.date)}
//                 </p>
//               </div>
//             </a>
//           ))}
//         </div>

//         {/* Right Side News */}
//         <div className="w-full md:w-[35%] grid grid-cols-1 sm:grid-cols-2 gap-4">
//           {/* Top Two News */}
//           {newsData.slice(6, 10).map((news, index) => (
//             <a
//               key={index}
//               href={news.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-white rounded-sm overflow-hidden block group transition-shadow duration-300"
//             >
//               <div>
//                 <h2 className="group-hover:underline font-medium text-[15px] text-primary mt-1 leading-6">
//                   {news.title.length > 43
//                     ? `${news.title.substring(0, 43)}...`
//                     : " "}
//                 </h2>
//                 <p className="text-gray-500 text-xs mt-2">
//                   {formatDate(news.date)}
//                 </p>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LatestNews;

// import React, { useState, useEffect } from "react";
// import Loader from "../Loader";
// import { COPPER_NEWS } from "@/src/api/platinumAPI";

// const LatestNews = () => {
//   const [newsData, setNewsData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentDate, setCurrentDate] = useState(new Date().toISOString());

//   // Update current date every minute
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentDate(new Date().toISOString());
//     }, 60000); // Update every minute

//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await fetch(COPPER_NEWS);
//         if (!response.ok) {
//           throw new Error("Failed to fetch news");
//         }
//         const data = await response.json();
//         if (!data || data.length === 0) {
//           throw new Error("No news available");
//         }

//         // Use current date for any null dates
//         const processedData = data.map((news) => ({
//           ...news,
//           date: news.date || currentDate,
//         }));

//         setNewsData(processedData);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNews();
//   }, [currentDate]); // Re-fetch when current date updates

//   // Function to format date safely
//   const formatDate = (dateString) => {
//     if (!dateString) return "";

//     try {
//       return new Date(dateString).toLocaleDateString("en-US", {
//         month: "short",
//         day: "numeric",
//         year: "numeric",
//       });
//     } catch (error) {
//       console.warn("Invalid date format:", dateString);
//       return "";
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-32">
//         <span className="ml-3 text-gray-800 font-semibold mx-auto">
//           <Loader />
//         </span>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-32 text-red-500">
//         <span>Error: {error}</span>
//       </div>
//     );
//   }

//   return (
//     <div className="">
//       <h1 className="text-[21px] cambay font-bold mb-5 border-b border-black/10 pb-2">
//         Latest Copper News
//       </h1>

//       <div className="flex flex-wrap md:flex-nowrap">
//         {/* Full News Section */}
//         <div className="w-full md:w-[65%] space-y-4">
//           {newsData.slice(0, 5).map((news, index) => (
//             <a
//               key={index}
//               href={news.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-white rounded-sm overflow-hidden block group transition-shadow duration-300"
//             >
//               <div>
//                 <h2 className="group-hover:underline font-medium text-[15px] text-primary leading-6 mt-1 line-clamp-1">
//                   {news.title || ""}
//                 </h2>
//                 <p className="text-gray-500 text-xs mt-2">
//                   {formatDate(news.date)}
//                 </p>
//               </div>
//             </a>
//           ))}
//         </div>

//         {/* Right Side News */}
//         <div className="w-full md:w-[35%] grid grid-cols-1 sm:grid-cols-2 gap-4">
//           {newsData.slice(6, 10).map((news, index) => (
//             <a
//               key={index}
//               href={news.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-white rounded-sm overflow-hidden block group transition-shadow duration-300"
//             >
//               <div>
//                 <h2 className="group-hover:underline font-medium text-[15px] text-primary mt-1 leading-6">
//                   {news.title?.length > 43
//                     ? `${news.title.substring(0, 43)}...`
//                     : news.title || ""}
//                 </h2>
//                 <p className="text-gray-500 text-xs mt-2">
//                   {formatDate(news.date)}
//                 </p>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LatestNews;

import React, { useState, useEffect } from "react";
import Loader from "../Loader";
import { GENERAL_NEWS } from "@/src/api/platinumAPI";

// Updated: 2026-02-15 - Using ONLY general news endpoint
const LatestNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        console.log('Fetching latest news from:', GENERAL_NEWS);
        const response = await fetch(GENERAL_NEWS);
        
        // Gracefully handle non-200 responses — show empty state, don't crash
        if (!response.ok) {
          console.warn(`News API returned ${response.status} — showing empty state`);
          setNewsData([]);
          setLoading(false);
          return;
        }
        
        const data = await response.json();
        
        if (!data || data.length === 0) {
          setNewsData([]);
          setLoading(false);
          return;
        }

        const processedData = Array.isArray(data)
          ? data.map((news) => ({
              ...news,
              date: news.date || new Date().toISOString(),
            }))
          : [];

        setNewsData(processedData);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching latest news:', err);
        // Don't surface the error to the UI — just show empty state
        setNewsData([]);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch (error) {
      console.warn("Invalid date format:", dateString);
      return "";
    }
  };

  if (loading) {
    return (
      <div>
        <h1 className="text-[17px] md:text-[19px] cambay font-bold mb-3 border-b border-black/10 pb-2">
          Latest Platinum News
        </h1>
        <div className="flex justify-center items-center h-24">
          <Loader />
        </div>
      </div>
    );
  }

  if (newsData.length === 0) {
    return (
      <div>
        <h1 className="text-[17px] md:text-[19px] cambay font-bold mb-3 border-b border-black/10 pb-2">
          Latest Platinum News
        </h1>
        <div className="text-center py-6 text-gray-500">
          No news available at this time
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-[17px] md:text-[19px] cambay font-bold mb-3 border-b border-black/10 pb-2">
        Latest Platinum News
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
        {/* Left Side: Main News with Image */}
        <div>
          {newsData[0] && (
            <a
              href={newsData[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {newsData[0].image_url && (
                <img
                  src={newsData[0].image_url}
                  alt={newsData[0].title}
                  className="w-full h-40 sm:h-48 md:h-52 object-cover mb-2 rounded-md"
                />
              )}
              {(newsData[0].source || newsData[0].ticker) && (
                <div className="mb-1">
                  <span className="bg-[#00AEEF] text-[10px] rounded-sm text-white px-2 py-0.5">
                    {newsData[0].source || newsData[0].ticker}
                  </span>
                </div>
              )}
              <h2 className="text-[15px] md:text-[16px] font-semibold text-primary mb-1 hover:underline leading-snug">
                {newsData[0].title}
              </h2>
              {(newsData[0].summary || newsData[0].content) && (
                <p className="text-[13px] text-gray-600 mb-1 line-clamp-2">
                  {(newsData[0].summary || newsData[0].content).substring(0, 130)}...
                </p>
              )}
              {newsData[0].company_name && (
                <p className="text-[12px] text-gray-600 mb-0.5">{newsData[0].company_name}</p>
              )}
              <p className="text-gray-500 text-xs">{formatDate(newsData[0].date)}</p>
            </a>
          )}
        </div>

        {/* Right Side: Three Vertical News */}
        <div className="space-y-3">
          {newsData.slice(1, 4).map((news, index) => (
            <a
              key={news.id || index}
              href={news.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 border-b border-gray-100 pb-3 last:border-b-0 last:pb-0"
            >
              {news.image_url && (
                <img
                  src={news.image_url}
                  alt={news.title}
                  className="w-20 h-16 md:w-20 md:h-16 object-cover flex-shrink-0 rounded-md"
                />
              )}
              <div className="flex flex-col justify-start min-w-0">
                {(news.source || news.ticker) && (
                  <span className="bg-[#00AEEF] text-[9px] rounded-sm text-white px-1.5 py-0.5 mb-1 self-start">
                    {news.source || news.ticker}
                  </span>
                )}
                <h3 className="text-[13px] font-medium text-primary line-clamp-2 hover:underline leading-snug">
                  {news.title}
                </h3>
                {news.company_name && (
                  <p className="text-[11px] text-gray-600 mt-0.5">{news.company_name}</p>
                )}
                <p className="text-gray-500 text-[11px] mt-1">{formatDate(news.date)}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
