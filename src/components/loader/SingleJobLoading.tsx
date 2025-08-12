
export default function SingleJobLoading () {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          {/* Company Logo Skeleton */}
          <div className="w-16 h-16 bg-gray-200 rounded-full animate-pulse"></div>

          <div className="flex-1">
            {/* Job Title Skeleton */}
            <div className="flex items-center gap-3 mb-2">
              <div className="h-7 bg-gray-200 rounded animate-pulse w-64"></div>
              <div className="h-6 bg-blue-100 rounded-full animate-pulse w-16"></div>
            </div>

            {/* View Employer Link Skeleton */}
            <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
          </div>
        </div>

        {/* Apply Button and Expiry Date */}
        <div className="flex flex-col md:items-end gap-2">
          <div className="h-10 bg-gray-200 rounded animate-pulse w-32"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-40"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Job Description Section */}
        <div className="lg:col-span-2">
          <div className="h-6 bg-gray-200 rounded animate-pulse w-32 mb-4"></div>

          {/* Description Paragraphs */}
          <div className="space-y-3 mb-6">
            <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3"></div>
          </div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3"></div>
          </div>
        </div>

        {/* Job Overview Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="h-6 bg-gray-200 rounded animate-pulse w-28 mb-6"></div>

            {/* Job Details */}
            <div className="space-y-6">
              {/* Job Posted */}
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-gray-200 rounded animate-pulse mt-0.5"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-24 mb-1"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
                </div>
              </div>

              {/* Job Expire */}
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-gray-200 rounded animate-pulse mt-0.5"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-28 mb-1"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
                </div>
              </div>

              {/* Education */}
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-gray-200 rounded animate-pulse mt-0.5"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-20 mb-1"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-16"></div>
                </div>
              </div>


              {/* Job Type */}
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-gray-200 rounded animate-pulse mt-0.5"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-20 mb-1"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-16"></div>
                </div>
              </div>

              {/* Experience */}
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-gray-200 rounded animate-pulse mt-0.5"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-24 mb-1"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
                </div>
              </div>
              {/* Job Type */}
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-gray-200 rounded animate-pulse mt-0.5"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-20 mb-1"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-16"></div>
                </div>
              </div>

              {/* Experience */}
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-gray-200 rounded animate-pulse mt-0.5"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-24 mb-1"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
