

export default function PostJobLoading() {
    return (
      <>
        <div className="flex-1 overflow-auto">
          <div className="p-4 max-w-6xl mx-auto animate-pulse">
        <div className="h-6 w-32 bg-gray-200 rounded mb-6" />
  
        {/* Job Title */}
        <div className="h-10 w-full bg-gray-200 rounded mb-4" />
  
        {/* Type & Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="h-10 bg-gray-200 rounded" />
          <div className="h-10 bg-gray-200 rounded" />
        </div>
  
        {/* Education & Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="h-10 bg-gray-200 rounded" />
          <div className="h-10 bg-gray-200 rounded" />
        </div>
  
        {/* Skills */}
        <div className="h-20 bg-gray-200 rounded mb-4" />
  
        {/* Salary & Rate */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="h-10 bg-gray-200 rounded" />
          <div className="h-10 bg-gray-200 rounded" />
        </div>
  
        {/* Vacancies & Expiration Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="h-10 bg-gray-200 rounded" />
          <div className="h-10 bg-gray-200 rounded" />
        </div>
  
        {/* Job Pattern & Address */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="h-10 bg-gray-200 rounded" />
          <div className="h-10 bg-gray-200 rounded" />
        </div>
  
        {/* Map */}
        <div className="h-64 bg-gray-200 rounded mb-4" />
  
        {/* Description */}
        <div className="h-20 bg-gray-200 rounded" />
      </div>
        </div>
      </>
    );
  }
  