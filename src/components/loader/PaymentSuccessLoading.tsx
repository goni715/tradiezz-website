export default function PaymentSuccessLoading () {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto space-y-8">
        {/* Success Icon Skeleton */}
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Title and Subtitle Skeleton */}
        <div className="text-center space-y-4">
          <div className="h-8 bg-gray-200 rounded-lg mx-auto max-w-xs animate-pulse"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded mx-auto max-w-md animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded mx-auto max-w-sm animate-pulse"></div>
          </div>
        </div>

        {/* Payment Details Card Skeleton */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 space-y-6">
          {/* Card Title */}
          <div className="h-6 bg-gray-200 rounded max-w-48 animate-pulse"></div>

          {/* Payment Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Order ID */}
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded max-w-20 animate-pulse"></div>
              <div className="h-5 bg-gray-200 rounded max-w-40 animate-pulse"></div>
            </div>

            {/* Amount Paid */}
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded max-w-24 animate-pulse"></div>
              <div className="h-5 bg-gray-200 rounded max-w-28 animate-pulse"></div>
            </div>

            {/* Payment Method */}
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded max-w-32 animate-pulse"></div>
              <div className="h-5 bg-gray-200 rounded max-w-36 animate-pulse"></div>
            </div>

            {/* Date */}
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded max-w-16 animate-pulse"></div>
              <div className="h-5 bg-gray-200 rounded max-w-28 animate-pulse"></div>
            </div>
          </div>

          {/* Transaction ID */}
          <div className="space-y-2 pt-4 border-t border-gray-100">
            <div className="h-4 bg-gray-200 rounded max-w-28 animate-pulse"></div>
            <div className="flex items-center justify-between">
              <div className="h-5 bg-gray-200 rounded flex-1 max-w-80 animate-pulse"></div>
              <div className="w-5 h-5 bg-gray-200 rounded animate-pulse ml-3"></div>
            </div>
          </div>
        </div>

        {/* Optional Action Buttons Skeleton */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <div className="h-10 bg-gray-200 rounded-lg px-6 py-2 max-w-32 animate-pulse"></div>
          <div className="h-10 bg-gray-200 rounded-lg px-6 py-2 max-w-36 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
