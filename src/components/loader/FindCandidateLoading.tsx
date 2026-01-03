import React from "react";

const FindCandidateLoading = () => {
  return (
    <>
      <div className="w-full mx-auto">
        <div className="space-y-4">
          {/* Skeleton Loading - 6 placeholder cards */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-between gap-4 p-6 bg-white border border-gray-200 rounded-lg animate-pulse"
            >
              {/* Left section: Avatar + Info */}
              <div className="flex items-center gap-4 flex-1">
                {/* Avatar skeleton */}
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0" />

                {/* Text content skeleton */}
                <div className="flex-1 space-y-2">
                  {/* Name skeleton */}
                  <div className="h-5 bg-gray-200 rounded w-32" />

                  {/* Agency name skeleton */}
                  <div className="h-4 bg-gray-200 rounded w-24" />

                  {/* Location + experience skeleton */}
                  <div className="h-4 bg-gray-200 rounded w-40" />
                </div>
              </div>

              {/* Right section: Bookmark + Button */}
              <div className="flex items-center gap-3 flex-shrink-0">
                {/* Bookmark icon skeleton */}
                <div className="w-6 h-6 bg-gray-200 rounded" />

                {/* View Profile button skeleton */}
                <div className="h-9 bg-gray-200 rounded px-6 w-24" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FindCandidateLoading;
