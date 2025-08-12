export default function NotificationsLoading () {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
        <div className="flex items-center gap-3">
          <div className="h-6 sm:h-8 w-36 sm:w-48 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-5 sm:h-6 w-6 sm:w-8 bg-gray-200 rounded animate-pulse"></div>
        </div>
        <div className="h-9 sm:h-10 w-28 sm:w-32 bg-gray-200 rounded animate-pulse"></div>
      </div>

      {/* Table Header - Hidden on mobile */}
      <div className="hidden md:grid md:grid-cols-12 gap-4 mb-4 px-4 py-2">
        <div className="col-span-2">
          <div className="h-4 w-12 bg-gray-200 rounded animate-pulse"></div>
        </div>
        <div className="col-span-8">
          <div className="h-4 w-12 bg-gray-200 rounded animate-pulse"></div>
        </div>
        <div className="col-span-2">
          <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>

      {/* Notification Rows */}
      <div className="space-y-2 sm:space-y-1">
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-100 p-3 sm:p-4">
            {/* Mobile Layout */}
            <div className="block md:hidden space-y-3">
              {/* Company Name and Actions Row */}
              <div className="flex items-center justify-between">
                <div className="h-5 w-16 sm:w-20 bg-gray-200 rounded animate-pulse"></div>
                <div className="flex items-center gap-2">
                  <div className="h-7 w-7 sm:h-8 sm:w-8 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-7 w-7 sm:h-8 sm:w-8 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-4/5 bg-gray-200 rounded animate-pulse"></div>
              </div>

              {/* Timestamp */}
              <div className="h-3 w-20 bg-gray-200 rounded animate-pulse"></div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:grid md:grid-cols-12 gap-4 items-center">
              {/* Company Name Column */}
              <div className="col-span-2">
                <div className="h-5 w-16 lg:w-20 bg-gray-200 rounded animate-pulse"></div>
              </div>

              {/* Message and Timestamp Column */}
              <div className="col-span-8 space-y-2">
                <div className="space-y-1">
                  <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="h-3 w-24 bg-gray-200 rounded animate-pulse"></div>
              </div>

              {/* Action Buttons Column */}
              <div className="col-span-2 flex items-center gap-2 justify-end">
                <div className="h-8 w-8 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-8 w-8 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
