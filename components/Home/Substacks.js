import React, { useState, useEffect } from "react";
import Link from "next/link";
import { SUBSTACKS } from "@/src/api/platinumAPI";

const FALLBACK_IMG =
  "https://substackcdn.com/image/fetch/w_96,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2ea5e4d0-5c3e-4e3e-8b3e-2ea5e4d05c3e_256x256.png";

const formatDate = (dateString) => {
  if (!dateString) return "";
  try {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return "";
  }
};

const Substacks = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubstacks = async () => {
      try {
        const response = await fetch(SUBSTACKS);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        setPosts(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error fetching substacks:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchSubstacks();
  }, []);

  // ✅ FIX: Return null while loading - no spinner or "Loading..." text
  if (loading) {
    return null;
  }

  if (error) {
    return (
      <div>
        <h2 className="flex items-center text-[19px] md:text-[21px] font-bold cambay border-b border-gray-300 pb-1 mb-3">
          Platinum Substacks
        </h2>
        <div className="text-center py-8 text-red-400 text-sm">
          Could not load posts. Please try again later.
        </div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div>
        <h2 className="flex items-center text-[19px] md:text-[21px] font-bold cambay border-b border-gray-300 pb-1 mb-3">
          Platinum Substacks
        </h2>
        <div className="text-center py-8 text-gray-400 text-sm">
          No posts available at this time.
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="flex items-center text-[19px] md:text-[21px] font-bold cambay border-b border-gray-300 pb-1 mb-3">
        Platinum Substacks
      </h2>

      <div className="space-y-4">
        {posts.slice(0, 3).map((post) => (
          <Link
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-b-0 group cursor-pointer"
          >
            {/* Thumbnail */}
            <div className="flex-shrink-0 w-[72px] h-[64px] rounded-md overflow-hidden bg-gray-100">
              <img
                src={post.image || FALLBACK_IMG}
                alt={post.title ? post.title.slice(0, 40) : "Substack post"}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                onError={(e) => { e.target.src = FALLBACK_IMG; }}
              />
            </div>

            {/* Text */}
            <div className="flex flex-col flex-1 min-w-0">
              <span className="text-[10px] font-semibold text-[#00AEEF] uppercase tracking-wide mb-0.5">
                {post.source || "Substack"}
              </span>
              <h3 className="text-sm font-bold text-gray-800 leading-snug group-hover:text-[#00AEEF] transition-colors line-clamp-2">
                {post.title}
              </h3>
              {post.snippet && (
                <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                  {post.snippet}
                </p>
              )}
              {post.date && (
                <span className="text-[10px] text-gray-400 mt-1">
                  {formatDate(post.date)}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Substacks;