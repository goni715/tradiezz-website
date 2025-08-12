

export default function RecentBlogLoading () {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="w-60 h-8 rounded-md bg-gray-200 animate-pulse my-6"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Skeleton Card 1 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Image Skeleton */}
          <div className="w-full h-48 bg-gray-200 animate-pulse"></div>

          <div className="p-6">
            {/* Category Tag Skeleton */}
            <div className="flex items-center gap-2 mb-4">
              <div className="h-6 w-32 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="h-4 w-4 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="h-4 w-6 bg-gray-200 rounded animate-pulse"></div>
            </div>

            {/* Title Skeleton */}
            <div className="space-y-2 mb-4">
              <div className="h-6 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-6 w-4/5 bg-gray-200 rounded animate-pulse"></div>
            </div>

            {/* Description Skeleton */}
            <div className="space-y-2 mb-6">
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
            </div>

            {/* Author and Date Skeleton */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-1 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Skeleton Card 2 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Image Skeleton */}
          <div className="w-full h-48 bg-gray-200 animate-pulse"></div>

          <div className="p-6">
            {/* Category Tag Skeleton */}
            <div className="flex items-center gap-2 mb-4">
              <div className="h-6 w-28 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="h-4 w-4 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="h-4 w-6 bg-gray-200 rounded animate-pulse"></div>
            </div>

            {/* Title Skeleton */}
            <div className="space-y-2 mb-4">
              <div className="h-6 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-6 w-3/5 bg-gray-200 rounded animate-pulse"></div>
            </div>

            {/* Description Skeleton */}
            <div className="space-y-2 mb-6">
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-4/5 bg-gray-200 rounded animate-pulse"></div>
            </div>

            {/* Author and Date Skeleton */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-1 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Skeleton Card 3 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Image Skeleton */}
          <div className="w-full h-48 bg-gray-200 animate-pulse"></div>

          <div className="p-6">
            {/* Category Tag Skeleton */}
            <div className="flex items-center gap-2 mb-4">
              <div className="h-6 w-36 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="h-4 w-4 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="h-4 w-6 bg-gray-200 rounded animate-pulse"></div>
            </div>

            {/* Title Skeleton */}
            <div className="space-y-2 mb-4">
              <div className="h-6 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-6 w-2/3 bg-gray-200 rounded animate-pulse"></div>
            </div>

            {/* Description Skeleton */}
            <div className="space-y-2 mb-6">
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse"></div>
            </div>

            {/* Author and Date Skeleton */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-4 w-28 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-1 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
