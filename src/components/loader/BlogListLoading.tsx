export default function BlogListLoading() {
  const array = [1, 2, 3, 4, 5];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {array?.map((item) => (
        <div
          key={item}
          className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
        >
          <div className="flex flex-col md:flex-row">
            {/* Image Skeleton */}
            <div className="w-full md:w-80 h-48 md:h-64 bg-gray-200 animate-pulse"></div>

            {/* Content Skeleton */}
            <div className="flex-1 p-6 space-y-4">
              {/* Date and Comments Skeleton */}
              <div className="flex items-center space-x-4">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
              </div>

              {/* Title Skeleton */}
              <div className="space-y-2">
                <div className="h-6 bg-gray-200 rounded animate-pulse w-full"></div>
                <div className="h-6 bg-gray-200 rounded animate-pulse w-2/3"></div>
              </div>

              {/* Paragraph Skeleton */}
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-4/5"></div>
              </div>

              {/* Read More Button Skeleton */}
              <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
