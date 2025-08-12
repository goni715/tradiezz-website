const OverviewLoading = () => {
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

              {/* Table Header */}
              <div className="rounded-lg bg-white shadow-sm">
                <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-4 md:gap-6">
                  <div className="h-4 w-8 animate-pulse rounded bg-gray-200"></div>
                  <div className="h-4 w-24 animate-pulse rounded bg-gray-200"></div>
                  <div className="h-4 w-16 animate-pulse rounded bg-gray-200"></div>
                  <div className="h-4 w-16 animate-pulse rounded bg-gray-200"></div>
                </div>

                {/* Table Rows */}
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border-t border-gray-100">
                    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-4 md:gap-6 md:items-center">
                      {/* Job Column */}
                      <div className="space-y-3 md:col-span-1">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 animate-pulse rounded bg-gray-300"></div>
                          <div className="space-y-2">
                            <div className="h-4 w-24 animate-pulse rounded bg-gray-300"></div>
                            <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                              <div className="h-3 w-16 animate-pulse rounded bg-gray-200"></div>
                              <div className="h-3 w-20 animate-pulse rounded bg-gray-200"></div>
                            </div>
                            <div className="h-3 w-12 animate-pulse rounded bg-gray-200"></div>
                          </div>
                        </div>
                      </div>

                      {/* Date Applied Column */}
                      <div className="md:col-span-1">
                        <div className="h-4 w-28 animate-pulse rounded bg-gray-200"></div>
                      </div>

                      {/* Status Column */}
                      <div className="md:col-span-1">
                        <div className="h-6 w-16 animate-pulse rounded-full bg-gray-200"></div>
                      </div>

                      {/* Action Column */}
                      <div className="md:col-span-1">
                        <div className="h-8 w-24 animate-pulse rounded bg-gray-200"></div>
                      </div>
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

export default OverviewLoading;
