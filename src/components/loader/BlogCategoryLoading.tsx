

const BlogCategoryLoading = () => {
  return (
    <div className="space-y-4 bg-white p-4 shadow rounded-md">
      {/* Title skeleton */}
      <div className="h-6 w-20 rounded bg-gray-200 animate-pulse"></div>

      {/* Checkbox items skeleton */}
      <div className="space-y-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            {/* Checkbox skeleton */}
            <div className="h-5 w-5 rounded border border-gray-200 bg-gray-200 animate-pulse"></div>
            {/* Label skeleton */}
            <div className="h-4 flex-1 max-w-xs rounded bg-gray-200 animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogCategoryLoading;