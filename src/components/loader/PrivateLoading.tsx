
const PrivateLoading = () => {
    return (
      <div className="min-h-[calc(100vh-88px)] p-6">
        <div className="max-w-7xl mx-auto p-4">
          {/* Header Skeleton */}
          <div className="mb-8">
            <div className="h-px bg-gray-200 animate-pulse"></div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          

            {/* Main Content Skeleton */}
            <div className="lg:col-span-4">
         
              {/* Chart/Graph Skeleton */}
              <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="h-6 bg-gray-200 rounded w-32 animate-pulse"></div>
                  <div className="flex space-x-2">
                    <div className="h-8 w-20 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-8 w-20 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
                <div className="h-48 bg-gray-200 rounded-lg animate-pulse"></div>
              </div>

              {/* Table/List Skeleton */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="h-6 bg-gray-200 rounded w-40 animate-pulse"></div>
                    <div className="h-9 w-32 bg-gray-200 rounded-lg animate-pulse"></div>
                  </div>
                </div>
                <div className="divide-y divide-gray-100">
                  {[...Array(1)].map((_, i) => (
                    <div key={i} className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="h-12 w-12 bg-gray-200 rounded-full animate-pulse"></div>
                        <div className="flex-1">
                          <div className="h-4 bg-gray-200 rounded w-48 mb-2 animate-pulse"></div>
                          <div className="h-3 bg-gray-200 rounded w-32 animate-pulse"></div>
                        </div>
                        <div className="flex space-x-2">
                          <div className="h-6 w-16 bg-gray-200 rounded-full animate-pulse"></div>
                          <div className="h-8 w-8 bg-gray-200 rounded animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="h-10 w-10 bg-gray-200 rounded-lg animate-pulse"></div>
                  <div>
                    <div className="h-4 bg-gray-200 rounded w-24 mb-2 animate-pulse"></div>
                    <div className="h-3 bg-gray-200 rounded w-16 animate-pulse"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  {[...Array(3)].map((_, j) => (
                    <div key={j} className="flex items-center justify-between">
                      <div className="h-3 bg-gray-200 rounded w-32 animate-pulse"></div>
                      <div className="h-3 bg-gray-200 rounded w-12 animate-pulse"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default PrivateLoading