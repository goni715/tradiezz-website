export default function SubscriptionLoading () {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Basic Plan Skeleton */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="space-y-4">
            {/* Title */}
            <div className="h-6 bg-gray-200 rounded animate-pulse"></div>

            {/* Description */}
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
            </div>

            {/* Price */}
            <div className="flex items-baseline space-x-2">
              <div className="h-10 w-16 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
            </div>

            {/* Features */}
            <div className="space-y-3 pt-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-gray-200 rounded-full animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded flex-1 animate-pulse"></div>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="pt-6">
              <div className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Standard Plan Skeleton (Recommended) */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm relative">
          {/* Recommendation Banner */}
          <div className="h-10 bg-gray-300 rounded-t-lg animate-pulse"></div>

          <div className="p-6">
            <div className="space-y-4">
              {/* Title */}
              <div className="h-6 bg-gray-200 rounded animate-pulse"></div>

              {/* Description */}
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
              </div>

              {/* Price */}
              <div className="flex items-baseline space-x-2">
                <div className="h-10 w-16 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
              </div>

              {/* Features */}
              <div className="space-y-3 pt-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-gray-200 rounded-full animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded flex-1 animate-pulse"></div>
                  </div>
                ))}
              </div>

              {/* Button */}
              <div className="pt-6">
                <div className="h-12 bg-gray-300 rounded-lg animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Plan Skeleton */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="space-y-4">
            {/* Title */}
            <div className="h-6 bg-gray-200 rounded animate-pulse"></div>

            {/* Description */}
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
            </div>

            {/* Price */}
            <div className="flex items-baseline space-x-2">
              <div className="h-10 w-16 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
            </div>

            {/* Features */}
            <div className="space-y-3 pt-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-gray-200 rounded-full animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded flex-1 animate-pulse"></div>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="pt-6">
              <div className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
