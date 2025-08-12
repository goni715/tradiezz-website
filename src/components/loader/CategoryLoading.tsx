

export default function CategoryLoading () {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="w-60 h-8 rounded-md bg-gray-200 animate-pulse my-6"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Skeleton cards */}
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-4 flex items-center space-x-3">
            {/* Icon skeleton */}
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-gray-200 rounded-md animate-pulse"></div>
            </div>

            {/* Content skeleton */}
            <div className="flex-1 min-w-0">
              {/* Title skeleton */}
              <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>

              {/* Subtitle skeleton */}
              <div className="h-3 bg-gray-200 rounded animate-pulse w-3/4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
