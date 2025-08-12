export default function FindCandidateLoading() {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {/* Profile Cards Skeleton */}
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div className="flex items-center space-x-4 flex-1">
            {/* Avatar Skeleton */}
            <div className="h-12 w-12 rounded-full bg-gray-200 animate-pulse" />

            <div className="flex-1 space-y-2">
              {/* Name Skeleton */}
              <div className="h-5 w-32 bg-gray-200 rounded animate-pulse" />

              {/* Title Skeleton */}
              <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />

              {/* Location and Experience Skeleton */}
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-gray-200 animate-pulse" />
                <div className="h-4 w-48 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {/* Bookmark Icon Skeleton */}
            <div className="h-5 w-5 bg-gray-200 rounded animate-pulse" />

            {/* View Profile Button Skeleton */}
            <div className="h-9 w-24 bg-gray-200 rounded-md animate-pulse" />
          </div>
        </div>
      ))}

      {/* Pagination Skeleton */}
      <div className="flex justify-center items-center space-x-2 mt-8">
        <div className="h-8 w-8 bg-gray-200 rounded animate-pulse" />
        <div className="h-8 w-8 bg-gray-200 rounded-md animate-pulse" />
        <div className="h-8 w-8 bg-gray-200 rounded-md animate-pulse" />
        <div className="h-8 w-8 bg-gray-200 rounded-md animate-pulse" />
        <div className="h-8 w-8 bg-gray-200 rounded animate-pulse" />
      </div>
    </div>
  )
}
