

export default function BlogDetailLoading () {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      {/* Hero Section */}
      <div className="relative">
        {/* Hero Image Skeleton */}
        <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] bg-gray-300 animate-pulse rounded-lg mx-auto max-w-6xl" />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gray-600 bg-opacity-30 rounded-lg mx-auto max-w-6xl">
          <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12">
            {/* Category Tag Skeleton */}
            <div className="inline-block mb-4">
              <div className="h-6 w-32 bg-gray-400 bg-opacity-60 rounded-full animate-pulse" />
            </div>

            {/* Title Skeleton */}
            <div className="space-y-3 mb-6">
              <div className="h-8 md:h-10 lg:h-12 bg-gray-400 bg-opacity-60 rounded animate-pulse w-full max-w-2xl" />
              <div className="h-8 md:h-10 lg:h-12 bg-gray-400 bg-opacity-60 rounded animate-pulse w-3/4 max-w-xl" />
            </div>

            {/* Author Info Skeleton */}
            <div className="flex items-center space-x-4">
              {/* Avatar */}
              <div className="w-10 h-10 bg-gray-400 bg-opacity-60 rounded-full animate-pulse" />

              {/* Author Details */}
              <div className="flex items-center space-x-4">
                <div className="h-4 w-24 bg-gray-400 bg-opacity-60 rounded animate-pulse" />
                <div className="h-4 w-20 bg-gray-400 bg-opacity-60 rounded animate-pulse" />
                <div className="h-4 w-8 bg-gray-400 bg-opacity-60 rounded animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        {/* Description Skeleton */}
        <div className="space-y-3 mb-8">
          <div className="h-5 bg-gray-300 rounded animate-pulse w-full" />
          <div className="h-5 bg-gray-300 rounded animate-pulse w-4/5" />
        </div>

        {/* Article Content Skeleton */}
        <div className="space-y-6">
          {/* Paragraph 1 */}
          <div className="space-y-3">
            <div className="h-4 bg-gray-300 rounded animate-pulse w-full" />
            <div className="h-4 bg-gray-300 rounded animate-pulse w-11/12" />
            <div className="h-4 bg-gray-300 rounded animate-pulse w-4/5" />
            <div className="h-4 bg-gray-300 rounded animate-pulse w-full" />
            <div className="h-4 bg-gray-300 rounded animate-pulse w-3/4" />
          </div>

          {/* Paragraph 2 */}
          <div className="space-y-3">
            <div className="h-4 bg-gray-300 rounded animate-pulse w-full" />
            <div className="h-4 bg-gray-300 rounded animate-pulse w-5/6" />
            <div className="h-4 bg-gray-300 rounded animate-pulse w-full" />
            <div className="h-4 bg-gray-300 rounded animate-pulse w-2/3" />
          </div>

          {/* Subheading Skeleton */}
          <div className="pt-4">
            <div className="h-6 bg-gray-300 rounded animate-pulse w-1/2 mb-4" />
          </div>

          {/* Paragraph 3 */}
          <div className="space-y-3">
            <div className="h-4 bg-gray-300 rounded animate-pulse w-full" />
            <div className="h-4 bg-gray-300 rounded animate-pulse w-4/5" />
            <div className="h-4 bg-gray-300 rounded animate-pulse w-full" />
            <div className="h-4 bg-gray-300 rounded animate-pulse w-3/5" />
          </div>

          {/* List Items Skeleton */}
          <div className="space-y-3 pl-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse mt-2" />
              <div className="h-4 bg-gray-300 rounded animate-pulse w-4/5" />
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse mt-2" />
              <div className="h-4 bg-gray-300 rounded animate-pulse w-3/4" />
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse mt-2" />
              <div className="h-4 bg-gray-300 rounded animate-pulse w-5/6" />
            </div>
          </div>

          {/* Final Paragraph */}
          <div className="space-y-3">
            <div className="h-4 bg-gray-300 rounded animate-pulse w-full" />
            <div className="h-4 bg-gray-300 rounded animate-pulse w-2/3" />
          </div>
        </div>

        {/* Tags Section Skeleton */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            <div className="h-8 w-20 bg-gray-300 rounded-full animate-pulse" />
            <div className="h-8 w-24 bg-gray-300 rounded-full animate-pulse" />
            <div className="h-8 w-28 bg-gray-300 rounded-full animate-pulse" />
            <div className="h-8 w-16 bg-gray-300 rounded-full animate-pulse" />
          </div>
        </div>

        {/* Share Section Skeleton */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="h-5 w-32 bg-gray-300 rounded animate-pulse" />
            <div className="flex space-x-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse" />
              <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse" />
              <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
