

export default function EmployerLoading() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12  bg-white">
      {/* Profile Header */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
        {/* Profile Image */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gray-200 animate-pulse flex-shrink-0" />

        {/* Name and Title */}
        <div className="flex-1 text-center sm:text-left w-full sm:w-auto">
          <div className="h-6 sm:h-8 w-40 sm:w-48 bg-gray-200 rounded animate-pulse mb-2 mx-auto sm:mx-0" />
          <div className="h-4 sm:h-5 w-32 sm:w-40 bg-gray-200 rounded animate-pulse mx-auto sm:mx-0" />
        </div>
      </div>

      {/* Company Information Section */}
      <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-200 rounded animate-pulse" />
          <div className="h-5 sm:h-6 w-32 sm:w-40 bg-gray-200 rounded animate-pulse" />
        </div>

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
          {/* Company Logo/Icon */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-gray-200 rounded-lg animate-pulse" />
          </div>

          {/* Company Details */}
          <div className="flex-1">
            <div className="h-5 sm:h-6 w-full max-w-xs bg-gray-200 rounded animate-pulse mb-2 mx-auto lg:mx-0" />
            <div className="h-4 w-full max-w-sm bg-gray-200 rounded animate-pulse mb-3 sm:mb-4 mx-auto lg:mx-0" />

            {/* Description paragraph */}
            <div className="space-y-2 mb-3 sm:mb-4">
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-full sm:w-3/4 bg-gray-200 rounded animate-pulse mx-auto lg:mx-0" />
            </div>

            {/* Website link */}
            <div className="h-4 w-28 sm:w-36 bg-gray-200 rounded animate-pulse mx-auto lg:mx-0" />
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-200 rounded animate-pulse" />
          <div className="h-5 sm:h-6 w-28 sm:w-36 bg-gray-200 rounded animate-pulse" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Email */}
          <div className="flex items-start gap-3">
            <div className="w-4 h-4 sm:w-5 sm:h-5 mt-1 bg-gray-200 rounded animate-pulse flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="h-3 sm:h-4 w-10 sm:w-12 bg-gray-200 rounded animate-pulse mb-1" />
              <div className="h-3 sm:h-4 w-full max-w-[200px] bg-gray-200 rounded animate-pulse" />
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3">
            <div className="w-4 h-4 sm:w-5 sm:h-5 mt-1 bg-gray-200 rounded animate-pulse flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="h-3 sm:h-4 w-10 sm:w-12 bg-gray-200 rounded animate-pulse mb-1" />
              <div className="h-3 sm:h-4 w-28 sm:w-32 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-3 sm:col-span-2 lg:col-span-1">
            <div className="w-4 h-4 sm:w-5 sm:h-5 mt-1 bg-gray-200 rounded animate-pulse flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="h-3 sm:h-4 w-12 sm:w-16 bg-gray-200 rounded animate-pulse mb-1" />
              <div className="h-3 sm:h-4 w-full max-w-[250px] bg-gray-200 rounded animate-pulse mb-1" />
              <div className="h-3 sm:h-4 w-16 sm:w-20 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
