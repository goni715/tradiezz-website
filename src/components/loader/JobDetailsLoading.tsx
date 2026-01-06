

const JobDetailsLoading = () =>{
  // Pulse animation
  const skeleton = "animate-pulse"

  return (
    <div className="min-h-full max-w-7xl mx-auto bg-white p-6 md:p-8 lg:p-12">
      <div className="mx-auto"> 
        {/* Header Skeleton */}
        <div className="mb-8">
          <div className={`h-10 bg-muted rounded-lg w-1/2 mb-4 ${skeleton}`}></div>
          <div className={`h-5 bg-muted rounded-lg w-1/4 ${skeleton}`}></div>
        </div>

        {/* Info Cards Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-6">
              <div className={`h-4 bg-muted rounded w-20 mb-3 ${skeleton}`}></div>
              <div className={`h-6 bg-muted rounded w-32 mb-2 ${skeleton}`}></div>
              <div className={`h-4 bg-muted rounded w-24 ${skeleton}`}></div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Required Skills Skeleton */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className={`h-8 bg-muted rounded w-40 mb-6 ${skeleton}`}></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`h-12 bg-muted rounded-md ${skeleton}`}></div>
                ))}
              </div>
            </div>

            {/* Benefits Skeleton */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className={`h-8 bg-muted rounded w-32 mb-4 ${skeleton}`}></div>
              <div className="space-y-2">
                <div className={`h-4 bg-muted rounded w-full ${skeleton}`}></div>
                <div className={`h-4 bg-muted rounded w-5/6 ${skeleton}`}></div>
              </div>
            </div>
          </div>

          {/* Sidebar Skeleton */}
          <div className="space-y-6">
            {/* Application Deadline Skeleton */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className={`h-6 bg-muted rounded w-40 mb-4 ${skeleton}`}></div>
              <div className={`h-7 bg-muted rounded w-32 ${skeleton}`}></div>
            </div>

            {/* Job Details Skeleton */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className={`h-6 bg-muted rounded w-32 mb-4 ${skeleton}`}></div>
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i}>
                    <div className={`h-4 bg-muted rounded w-16 mb-2 ${skeleton}`}></div>
                    <div className={`h-5 bg-muted rounded w-40 ${skeleton}`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetailsLoading;