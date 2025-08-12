const CandidateOverviewLoading = () => {
  return (
    <>
      <main className="flex-1 overflow-auto">
        <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
          <div className="mx-auto max-w-7xl space-y-6">
            {/* Header Section */}
            <div className="space-y-2">
              <div className="h-8 w-64 animate-pulse rounded bg-gray-300"></div>
              <div className="h-4 w-80 animate-pulse rounded bg-gray-200"></div>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-lg bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="h-8 w-16 animate-pulse rounded bg-gray-300"></div>
                      <div className="h-4 w-24 animate-pulse rounded bg-gray-200"></div>
                    </div>
                    <div className="h-8 w-8 animate-pulse rounded bg-gray-200"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Profile Banner */}
            <div className="rounded-lg bg-red-50 p-4 md:p-6">
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 animate-pulse rounded-full bg-gray-300"></div>
                  <div className="space-y-2">
                    <div className="h-5 w-48 animate-pulse rounded bg-gray-300"></div>
                    <div className="h-4 w-64 animate-pulse rounded bg-gray-200"></div>
                  </div>
                </div>
                <div className="h-10 w-28 animate-pulse rounded bg-gray-300"></div>
              </div>
            </div>

            {/* Recently Applied Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="h-6 w-36 animate-pulse rounded bg-gray-300"></div>
                <div className="h-4 w-16 animate-pulse rounded bg-gray-200"></div>
              </div>

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
        </div>
      </main>
    </>
  );
};

export default CandidateOverviewLoading;
