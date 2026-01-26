const SkeletonLoader = ({ className = '' }: { className?: string }) => (
  <div className={`bg-gray-200 animate-pulse ${className}`} />
)

const ChatLaoding = () => {
  return (
    <div className="flex h-screen bg-white">
      {/* Left Sidebar - Hidden on Mobile */}
      <div className="hidden md:flex md:w-80 flex-col border-r border-gray-200 bg-white">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <SkeletonLoader className="h-8 w-24 mb-4 rounded" />
          <SkeletonLoader className="h-10 w-full rounded-lg" />
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-3">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
            >
              {/* Avatar */}
              <SkeletonLoader className="h-12 w-12 rounded-full shrink-0" />
              
              {/* Chat Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <SkeletonLoader className="h-4 w-24 rounded" />
                  <SkeletonLoader className="h-3 w-8 rounded" />
                </div>
                <SkeletonLoader className="h-3 w-full rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Chat Area */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <SkeletonLoader className="h-10 w-10 rounded-full" />
            <div className="space-y-2">
              <SkeletonLoader className="h-4 w-32 rounded" />
              <SkeletonLoader className="h-3 w-20 rounded" />
            </div>
          </div>
          <SkeletonLoader className="h-10 w-10 rounded" />
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Incoming Message */}
          <div className="flex items-start gap-3 max-w-md">
            <SkeletonLoader className="h-8 w-8 rounded-full shrink-0" />
            <div className="space-y-2 flex-1">
              <SkeletonLoader className="h-3 w-24 rounded" />
              <SkeletonLoader className="h-10 w-64 rounded-lg" />
              <SkeletonLoader className="h-2 w-16 rounded" />
            </div>
          </div>

          {/* Outgoing Message */}
          <div className="flex items-start gap-3 justify-end">
            <div className="space-y-2 flex-1 max-w-md text-right">
              <SkeletonLoader className="h-10 w-48 rounded-lg ml-auto" />
              <SkeletonLoader className="h-2 w-16 rounded ml-auto" />
            </div>
          </div>

          {/* Incoming Message */}
          <div className="flex items-start gap-3 max-w-lg">
            <SkeletonLoader className="h-8 w-8 rounded-full shrink-0" />
            <div className="space-y-2 flex-1">
              <SkeletonLoader className="h-3 w-24 rounded" />
              <SkeletonLoader className="h-16 w-full rounded-lg" />
              <SkeletonLoader className="h-2 w-16 rounded" />
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-200 space-y-4">
          <div className="flex items-center gap-2">
            <SkeletonLoader className="h-10 w-10 rounded" />
            <SkeletonLoader className="h-10 flex-1 rounded" />
            <SkeletonLoader className="h-10 w-10 rounded" />
            <SkeletonLoader className="h-10 w-10 rounded" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatLaoding
