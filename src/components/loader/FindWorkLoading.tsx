
export default function FindWorkLoading() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        {/* <div className="flex justify-between items-center mb-8">
          <div className="h-6 bg-gray-200 rounded animate-pulse w-32"></div>
          <div className="h-10 bg-gray-200 rounded animate-pulse w-40"></div>
        </div> */}

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-300 p-6 space-y-4">
              {/* Job Title and Bookmark */}
              <div className="flex justify-between items-start">
                <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4"></div>
                <div className="h-5 w-5 bg-gray-200 rounded animate-pulse"></div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-2">
                <div className="h-4 w-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
              </div>

              {/* Salary */}
              <div className="h-5 bg-gray-200 rounded animate-pulse w-20"></div>

              {/* Days Remaining */}
              <div className="flex items-center space-x-2">
                <div className="h-4 w-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-28"></div>
                <div className="h-6 bg-gray-200 rounded-full animate-pulse w-16 ml-auto"></div>
              </div>

              {/* View Details Button */}
              <div className="pt-4">
                <div className="h-12 bg-gray-200 rounded animate-pulse w-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
