export default function ApplicationLoading () {
  return (
    <>
     <main className="flex-1 overflow-auto">
        <div className="w-full max-w-6xl mx-auto p-4 bg-white">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
            <div className="flex items-center gap-2">
              <div className="h-8 bg-gray-200 rounded animate-pulse w-32"></div>
              <div className="h-6 bg-gray-200 rounded animate-pulse w-12"></div>
            </div>
          </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Skeleton Card 1 */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              {/* Avatar skeleton */}
              <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="space-y-2">
                {/* Name skeleton */}
                <div className="h-5 bg-gray-200 rounded animate-pulse w-20"></div>
                {/* Department skeleton */}
                <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
              </div>
            </div>
            {/* Delete button skeleton */}
            <div className="h-8 bg-gray-200 rounded animate-pulse w-16"></div>
          </div>

          {/* Details skeleton */}
          <div className="space-y-3 mb-6">
            <div className="h-4 bg-gray-200 rounded animate-pulse w-32"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-40"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-28"></div>
          </div>

          {/* Download button skeleton */}
          <div className="h-9 bg-gray-200 rounded animate-pulse w-28"></div>
        </div>

        {/* Skeleton Card 2 */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="space-y-2">
                <div className="h-5 bg-gray-200 rounded animate-pulse w-20"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
              </div>
            </div>
            <div className="h-8 bg-gray-200 rounded animate-pulse w-16"></div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="h-4 bg-gray-200 rounded animate-pulse w-32"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-40"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-28"></div>
          </div>

          <div className="h-9 bg-gray-200 rounded animate-pulse w-28"></div>
        </div>

        {/* Skeleton Card 3 */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="space-y-2">
                <div className="h-5 bg-gray-200 rounded animate-pulse w-20"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
              </div>
            </div>
            <div className="h-8 bg-gray-200 rounded animate-pulse w-16"></div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="h-4 bg-gray-200 rounded animate-pulse w-32"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-40"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-28"></div>
          </div>

          <div className="h-9 bg-gray-200 rounded animate-pulse w-28"></div>
        </div>

        {/* Skeleton Card 4 */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="space-y-2">
                <div className="h-5 bg-gray-200 rounded animate-pulse w-20"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
              </div>
            </div>
            <div className="h-8 bg-gray-200 rounded animate-pulse w-16"></div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="h-4 bg-gray-200 rounded animate-pulse w-32"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-40"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-28"></div>
          </div>

          <div className="h-9 bg-gray-200 rounded animate-pulse w-28"></div>
        </div>

        {/* Skeleton Card 5 */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="space-y-2">
                <div className="h-5 bg-gray-200 rounded animate-pulse w-20"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
              </div>
            </div>
            <div className="h-8 bg-gray-200 rounded animate-pulse w-16"></div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="h-4 bg-gray-200 rounded animate-pulse w-32"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-40"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-28"></div>
          </div>

          <div className="h-9 bg-gray-200 rounded animate-pulse w-28"></div>
        </div>

        {/* Skeleton Card 6 */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="space-y-2">
                <div className="h-5 bg-gray-200 rounded animate-pulse w-20"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
              </div>
            </div>
            <div className="h-8 bg-gray-200 rounded animate-pulse w-16"></div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="h-4 bg-gray-200 rounded animate-pulse w-32"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-40"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-28"></div>
          </div>

          <div className="h-9 bg-gray-200 rounded animate-pulse w-28"></div>
        </div>
      </div>
          

          {/* Loading indicator at bottom */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse"></div>
               <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse"></div>
                <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse"></div>
                 <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse"></div>
                  <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </main>


    
    </>
  )
}
