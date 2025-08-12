export default function JobsLoading() {
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
            <div className="flex items-center gap-3">
              <div className="h-5 bg-gray-200 rounded animate-pulse w-20"></div>
              <div className="h-8 bg-gray-200 rounded animate-pulse w-28"></div>
            </div>
          </div>

          {/* Table Header - Hidden on mobile */}
          <div className="hidden md:grid md:grid-cols-12 gap-4 pb-3 border-b border-gray-200 mb-4">
            <div className="col-span-4">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-12"></div>
            </div>
            <div className="col-span-2">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-16"></div>
            </div>
            <div className="col-span-3">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
            </div>
            <div className="col-span-3">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-16"></div>
            </div>
          </div>

          {/* Job Rows */}
          <div className="space-y-4">
            {[...Array(7)].map((_, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 bg-gray-50"
              >
                {/* Mobile Layout */}
                <div className="md:hidden space-y-3">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="h-5 bg-gray-200 rounded animate-pulse w-24 mb-2"></div>
                      <div className="flex items-center gap-2">
                        <div className="h-4 bg-gray-200 rounded animate-pulse w-16"></div>
                        <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-gray-200 rounded-full animate-pulse"></div>
                      <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
                      <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="w-5 h-5 bg-gray-200 rounded-full animate-pulse"></div>
                    <div className="flex items-center gap-2">
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-8"></div>
                      <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:grid md:grid-cols-12 gap-4 items-center">
                  {/* Job Title and Type */}
                  <div className="col-span-4">
                    <div className="h-5 bg-gray-200 rounded animate-pulse w-24 mb-2"></div>
                    <div className="flex items-center gap-2">
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-16"></div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="col-span-2 flex justify-center">
                    <div className="w-5 h-5 bg-gray-200 rounded-full animate-pulse"></div>
                  </div>

                  {/* Applications */}
                  <div className="col-span-3 flex items-center justify-center gap-2">
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-8"></div>
                    <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
                  </div>

                  {/* Actions */}
                  <div className="col-span-3 flex items-center justify-center gap-3">
                    <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
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
  );
}
