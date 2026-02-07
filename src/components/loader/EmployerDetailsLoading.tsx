const EmployerDetailsLoading = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header Card Skeleton */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 pt-6 pb-6">
            {/* Profile Avatar and Basic Info Skeleton */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 mb-6">
              {/* Avatar Skeleton */}
              <div className="shrink-0 mb-4 sm:mb-0">
                <div className="w-32 h-32 rounded-lg bg-gray-200 animate-pulse" />
              </div>

              {/* Name and Rating Skeleton */}
              <div className="flex-1">
                <div className="h-8 bg-gray-200 rounded animate-pulse mb-2 w-48" />
                <div className="h-5 bg-gray-200 rounded animate-pulse mb-4 w-24" />

                {/* Rating Skeleton */}
                <div className="flex items-center space-x-4">
                  <div className="h-8 bg-gray-200 rounded animate-pulse w-32" />
                </div>
              </div>
            </div>

            {/* Action Buttons Skeleton */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <div className="h-12 bg-gray-200 rounded-lg animate-pulse flex-1 sm:flex-none sm:w-32" />
              <div className="h-12 bg-gray-200 rounded-lg animate-pulse flex-1 sm:flex-none sm:w-32" />
            </div>

            {/* Contact Information Skeleton */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 pb-8 border-b border-gray-200">
              <div>
                <div className="h-4 bg-gray-200 rounded animate-pulse mb-2 w-16" />
                <div className="h-6 bg-gray-200 rounded animate-pulse w-40" />
              </div>

              <div>
                <div className="h-4 bg-gray-200 rounded animate-pulse mb-2 w-16" />
                <div className="h-6 bg-gray-200 rounded animate-pulse w-40" />
              </div>
            </div>

            {/* Social Media Links Skeleton */}
            <div>
              <div className="h-4 bg-gray-200 rounded animate-pulse mb-4 w-20" />
              <div className="flex flex-wrap gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-gray-200 animate-pulse"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* About Card Skeleton */}
        <div className="mt-6 bg-white rounded-lg shadow-lg p-6">
          <div className="h-6 bg-gray-200 rounded animate-pulse mb-4 w-20" />
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded animate-pulse w-full" />
            <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6" />
            <div className="h-4 bg-gray-200 rounded animate-pulse w-4/5" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default EmployerDetailsLoading;
