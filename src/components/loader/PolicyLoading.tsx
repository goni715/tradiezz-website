export default function PolicyLoading () {
  return (
    <div className="min-h-full bg-white p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header skeleton */}
        <div className="mb-8">
          <div className="h-8 bg-gray-200 rounded animate-pulse w-80 max-w-full"></div>
        </div>

        {/* First paragraph skeleton */}
        <div className="mb-6 space-y-3">
          <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
        </div>

        {/* Second paragraph skeleton */}
        <div className="mb-8 space-y-3">
          <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3"></div>
        </div>

        {/* Bullet points skeleton */}
        <div className="mb-8 space-y-4">
          {/* First bullet point */}
          <div className="flex space-x-3">
            <div className="w-2 h-2 bg-gray-200 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-4/5"></div>
            </div>
          </div>

          {/* Second bullet point */}
          <div className="flex space-x-3">
            <div className="w-2 h-2 bg-gray-200 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
            <div className="flex-1">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
            </div>
          </div>

          {/* Third bullet point */}
          <div className="flex space-x-3">
            <div className="w-2 h-2 bg-gray-200 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
            <div className="flex-1">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3"></div>
            </div>
          </div>

          {/* Fourth bullet point */}
          <div className="flex space-x-3">
            <div className="w-2 h-2 bg-gray-200 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
            <div className="flex-1">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
            </div>
          </div>
        </div>

        {/* Large paragraph skeleton */}
        <div className="mb-8 space-y-3">
          <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-4/5"></div>
        </div>

        {/* More bullet points skeleton */}
        <div className="mb-8 space-y-4">
          {/* Fifth bullet point */}
          <div className="flex space-x-3">
            <div className="w-2 h-2 bg-gray-200 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
            </div>
          </div>

          {/* Sixth bullet point */}
          <div className="flex space-x-3">
            <div className="w-2 h-2 bg-gray-200 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
            <div className="flex-1">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3"></div>
            </div>
          </div>

          {/* Seventh bullet point */}
          <div className="flex space-x-3">
            <div className="w-2 h-2 bg-gray-200 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
            <div className="flex-1">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-4/5"></div>
            </div>
          </div>

          {/* Eighth bullet point */}
          <div className="flex space-x-3">
            <div className="w-2 h-2 bg-gray-200 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
            </div>
          </div>

          {/* Ninth bullet point */}
          <div className="flex space-x-3">
            <div className="w-2 h-2 bg-gray-200 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
            <div className="flex-1">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-3/5"></div>
            </div>
          </div>
        </div>

        {/* Final paragraph skeleton */}
        <div className="mb-8 space-y-3">
          <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3"></div>
        </div>
      </div>

      {/* Circular button skeleton in bottom left */}
      <div className="fixed bottom-6 left-6">
        <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse flex items-center justify-center">
          <div className="w-4 h-4 bg-gray-300 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
