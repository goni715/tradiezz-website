

export default function CandidateDetailsLoading () {
  return (
    <div className="max-w-6xl mx-auto bg-white px-4 sm:px-6 lg:px-8 py-12 shadow-lg">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
          {/* Profile Photo Skeleton */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-200 rounded-full animate-pulse flex-shrink-0"></div>

          <div className="flex-1 text-center sm:text-left w-full">
            {/* Name Skeleton */}
            <div className="h-6 sm:h-8 bg-gray-200 rounded w-40 sm:w-48 mx-auto sm:mx-0 mb-2 sm:mb-3 animate-pulse"></div>

            {/* Job Titles Skeleton */}
            <div className="h-3 sm:h-4 bg-gray-200 rounded w-64 sm:w-80 mx-auto sm:mx-0 mb-2 animate-pulse"></div>

            {/* Location Skeleton */}
            <div className="h-3 sm:h-4 bg-gray-200 rounded w-32 sm:w-40 mx-auto sm:mx-0 mb-3 sm:mb-4 animate-pulse"></div>

            {/* Job Seeking Section */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
              <div className="h-3 sm:h-4 bg-gray-200 rounded w-20 sm:w-24 mx-auto sm:mx-0 animate-pulse"></div>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2">
              <div className="h-5 sm:h-6 bg-gray-200 rounded-full w-28 sm:w-32 animate-pulse"></div>
              <div className="h-5 sm:h-6 bg-gray-200 rounded-full w-24 sm:w-28 animate-pulse"></div>
              <div className="h-5 sm:h-6 bg-gray-200 rounded-full w-20 sm:w-24 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Available Date Skeleton */}
        <div className="text-center sm:text-right">
          <div className="h-3 sm:h-4 bg-gray-200 rounded w-28 sm:w-32 mx-auto sm:mx-0 animate-pulse"></div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
        {/* Left Column */}
        <div className="xl:col-span-2 space-y-6 lg:space-y-8">
          {/* About Me Section */}
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
            <div className="h-5 sm:h-6 bg-gray-200 rounded w-20 sm:w-24 mb-3 sm:mb-4 animate-pulse"></div>
            <div className="space-y-2 sm:space-y-3">
              <div className="h-3 sm:h-4 bg-gray-200 rounded w-full animate-pulse"></div>
              <div className="h-3 sm:h-4 bg-gray-200 rounded w-full animate-pulse"></div>
              <div className="h-3 sm:h-4 bg-gray-200 rounded w-full animate-pulse"></div>
              <div className="h-3 sm:h-4 bg-gray-200 rounded w-4/5 animate-pulse"></div>
              <div className="h-3 sm:h-4 bg-gray-200 rounded w-3/4 sm:hidden animate-pulse"></div>
            </div>
          </div>

          {/* Career Objective Section */}
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
            <div className="h-5 sm:h-6 bg-gray-200 rounded w-28 sm:w-32 mb-3 sm:mb-4 animate-pulse"></div>
            <div className="space-y-2 sm:space-y-3">
              <div className="h-3 sm:h-4 bg-gray-200 rounded w-full animate-pulse"></div>
              <div className="h-3 sm:h-4 bg-gray-200 rounded w-full animate-pulse"></div>
              <div className="h-3 sm:h-4 bg-gray-200 rounded w-full animate-pulse"></div>
              <div className="h-3 sm:h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
              <div className="h-3 sm:h-4 bg-gray-200 rounded w-2/3 sm:hidden animate-pulse"></div>
            </div>
          </div>

          {/* Work Experience Section */}
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
            <div className="h-5 sm:h-6 bg-gray-200 rounded w-32 sm:w-36 mb-4 sm:mb-6 animate-pulse"></div>

            {/* Job Entry */}
            <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full animate-pulse flex-shrink-0 mt-1"></div>
              <div className="flex-1 min-w-0">
                <div className="h-4 sm:h-5 bg-gray-200 rounded w-32 sm:w-40 mb-2 animate-pulse"></div>
                <div className="h-3 sm:h-4 bg-gray-200 rounded w-36 sm:w-48 mb-1 animate-pulse"></div>
                <div className="h-3 sm:h-4 bg-gray-200 rounded w-24 sm:w-32 mb-3 sm:mb-4 animate-pulse"></div>
                <div className="space-y-2">
                  <div className="h-3 sm:h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                  <div className="h-3 sm:h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                  <div className="h-3 sm:h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                  <div className="h-3 sm:h-4 bg-gray-200 rounded w-4/5 sm:hidden animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Additional Job Entry for larger screens */}
            <div className="hidden lg:flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse flex-shrink-0 mt-1"></div>
              <div className="flex-1">
                <div className="h-5 bg-gray-200 rounded w-44 mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-52 mb-1 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-36 mb-4 animate-pulse"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6 lg:space-y-8">
          {/* Skills Section */}
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
            <div className="h-5 sm:h-6 bg-gray-200 rounded w-14 sm:w-16 mb-3 sm:mb-4 animate-pulse"></div>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-200 rounded-full animate-pulse flex-shrink-0"></div>
                <div className="h-3 sm:h-4 bg-gray-200 rounded w-28 sm:w-32 animate-pulse"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-200 rounded-full animate-pulse flex-shrink-0"></div>
                <div className="h-3 sm:h-4 bg-gray-200 rounded w-32 sm:w-36 animate-pulse"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-200 rounded-full animate-pulse flex-shrink-0"></div>
                <div className="h-3 sm:h-4 bg-gray-200 rounded w-36 sm:w-40 animate-pulse"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-200 rounded-full animate-pulse flex-shrink-0"></div>
                <div className="h-3 sm:h-4 bg-gray-200 rounded w-38 sm:w-44 animate-pulse"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-200 rounded-full animate-pulse flex-shrink-0"></div>
                <div className="h-3 sm:h-4 bg-gray-200 rounded w-40 sm:w-48 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Contact Details Section */}
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
            <div className="h-5 sm:h-6 bg-gray-200 rounded w-24 sm:w-28 mb-3 sm:mb-4 animate-pulse"></div>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gray-200 rounded animate-pulse flex-shrink-0"></div>
                <div className="h-3 sm:h-4 bg-gray-200 rounded w-32 sm:w-40 animate-pulse"></div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gray-200 rounded animate-pulse flex-shrink-0"></div>
                <div className="h-3 sm:h-4 bg-gray-200 rounded w-24 sm:w-28 animate-pulse"></div>
              </div>
            </div>

            {/* Download Button Skeleton */}
            <div className="mt-4 sm:mt-6">
              <div className="h-10 sm:h-12 bg-gray-200 rounded w-full animate-pulse"></div>
            </div>
          </div>

          {/* Additional Contact Info for Mobile */}
          <div className="lg:hidden bg-gray-50 p-4 rounded-lg">
            <div className="h-5 bg-gray-200 rounded w-32 mb-3 animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-3 bg-gray-200 rounded w-full animate-pulse"></div>
              <div className="h-3 bg-gray-200 rounded w-4/5 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
