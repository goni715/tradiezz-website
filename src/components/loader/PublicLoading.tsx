export default function PublicLoading () {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
        {/* Left side - Login Form Skeleton */}
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-sm border border-gray-300 p-8 space-y-6">
            {/* Title skeleton */}
            <div className="text-center">
              <div className="h-8 bg-gray-200 rounded animate-pulse w-48 mx-auto"></div>
            </div>

            {/* Email field skeleton */}
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-12"></div>
              <div className="h-12 bg-gray-100 rounded-md animate-pulse"></div>
            </div>

            {/* Password field skeleton */}
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-16"></div>
              <div className="relative">
                <div className="h-12 bg-gray-100 rounded-md animate-pulse"></div>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="h-5 w-5 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Remember me and forgot password skeleton */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="h-4 w-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
              </div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-28"></div>
            </div>

            {/* Sign In button skeleton */}
            <div className="h-12 bg-gray-200 rounded-md animate-pulse"></div>

            {/* Or divider skeleton */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-6 px-2"></div>
              </div>
            </div>
            {/* Sign up link skeleton */}
            <div className="text-center">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-40 mx-auto"></div>
            </div>
          </div>
        </div>

        {/* Right side - Illustration Skeleton */}
        <div className="hidden md:block w-full max-w-lg lg:max-w-xl">
          <div className="relative">
            {/* Main illustration area */}
            <div className="h-80 lg:h-96 bg-gray-200 rounded-2xl animate-pulse relative overflow-hidden">
              {/* Phone mockup skeleton */}
              <div className="absolute top-8 left-8 w-32 h-56 bg-gray-300 rounded-xl animate-pulse"></div>

              {/* Character skeleton */}
              <div className="absolute bottom-0 right-8">
                {/* Head */}
                <div className="w-12 h-12 bg-gray-300 rounded-full animate-pulse mb-2"></div>
                {/* Body */}
                <div className="w-16 h-32 bg-gray-300 rounded-t-full animate-pulse"></div>
              </div>

              {/* Furniture elements */}
              <div className="absolute bottom-4 left-4">
                {/* Plant pot */}
                <div className="w-8 h-12 bg-gray-300 rounded-b-full animate-pulse"></div>
              </div>

              <div className="absolute bottom-4 right-24">
                {/* Desk/furniture */}
                <div className="w-16 h-8 bg-gray-300 rounded animate-pulse"></div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-16 right-12 w-6 h-6 bg-gray-300 rounded animate-pulse"></div>
              <div className="absolute top-32 left-16 w-4 h-4 bg-gray-300 rounded animate-pulse"></div>
            </div>

            {/* Additional decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
