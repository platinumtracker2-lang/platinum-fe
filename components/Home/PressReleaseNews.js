import React, { useEffect, useState } from "react";
import { useRouter } from "next/router"; // For navigation
import { PRESS_RELEASE } from "@/src/api/platinumAPI";

const PressRelease = () => {
  const router = useRouter();
  const [pressReleases, setPressReleases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the press releases from the local API
  useEffect(() => {
    const fetchPressReleases = async () => {
      try {
        console.log("Fetching press releases from:", PRESS_RELEASE);
        const res = await fetch(PRESS_RELEASE);

        if (!res.ok) {
          console.warn(
            `Press releases API returned ${res.status} — showing empty state`,
          );
          setPressReleases([]);
          setLoading(false);
          return;
        }

        const data = await res.json();
        console.log("Press releases data:", data);
        setPressReleases(Array.isArray(data) ? data : []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching press releases:", error);
        setError(error.message);
        setPressReleases([]);
        setLoading(false);
      }
    };

    fetchPressReleases();
  }, []);

  // Navigate to a specific press release
  const handleNavigate = (id) => {
    router.push(`/news/press-release/${id}`);
  };

  // Format date function
  const formatDate = (dateString) => {
    if (!dateString) return "";
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
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
          Platinum Company Press Release
        </h1>
        <div className="text-center py-6 text-gray-500 text-sm">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1 className="text-[17px] md:text-[19px] cambay font-bold mb-3 border-b border-black/10 pb-2">
          Platinum Company Press Release
        </h1>
        <div className="text-center py-6 text-red-500 text-sm">
          Error loading press releases: {error}
        </div>
      </div>
    );
  }

  if (pressReleases.length === 0) {
    return (
      <div>
        <h1 className="text-[17px] md:text-[19px] cambay font-bold mb-3 border-b border-black/10 pb-2">
          Platinum Company Press Release
        </h1>
        <div className="text-center py-6 text-gray-500 text-sm">
          No press releases available at this time
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-[17px] md:text-[19px] cambay font-bold mb-3 border-b border-black/10 pb-2">
        Platinum Company Press Release
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-x-6">
        {pressReleases.slice(0, 8).map((release) => (
          <div
            key={release.id}
            className="flex overflow-hidden group cursor-pointer border-b border-black/10 pb-3 pt-1"
            onClick={() => handleNavigate(release.id)}
          >
            <div className="flex-1">
              {release.ticker && (
                <span className="bg-[#00AEEF] text-[10px] rounded-sm text-white px-2 py-0.5 mb-1 inline-block">
                  {release.ticker}
                </span>
              )}
              <h3 className="text-[13px] leading-snug font-medium group-hover:underline">
                {release.title && release.title.length > 110
                  ? `${release.title.substring(0, 110)}...`
                  : release.title || "No title available"}
              </h3>
              {release.company_name && (
                <p className="text-[12px] text-gray-600 mt-0.5">{release.company_name}</p>
              )}
              <div className="text-[11px] text-gray-500 mt-0.5">
                {formatDate(release.date || release.created_at)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PressRelease;
