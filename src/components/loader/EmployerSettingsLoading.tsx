"use client";

const EmployerSettingsLoading = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-white">
      <div className="h-6 sm:h-8 w-20 sm:w-24 bg-gray-200 rounded animate-pulse mb-6 sm:mb-8"></div>

      <div className="flex flex-wrap sm:flex-nowrap gap-4 sm:gap-8 border-b border-gray-200 mb-6 sm:mb-8 overflow-x-auto">
        <div className="flex items-center space-x-2 pb-3 sm:pb-4 border-b-2 border-blue-500 whitespace-nowrap">
          <div className="h-3 sm:h-4 w-3 sm:w-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-3 sm:h-4 w-14 sm:w-16 bg-gray-200 rounded animate-pulse"></div>
        </div>
        <div className="flex items-center space-x-2 pb-3 sm:pb-4 whitespace-nowrap">
          <div className="h-3 sm:h-4 w-3 sm:w-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-3 sm:h-4 w-20 sm:w-24 bg-gray-200 rounded animate-pulse"></div>
        </div>
        <div className="flex items-center space-x-2 pb-3 sm:pb-4 whitespace-nowrap">
          <div className="h-3 sm:h-4 w-3 sm:w-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-3 sm:h-4 w-18 sm:w-20 bg-gray-200 rounded animate-pulse"></div>
        </div>
        <div className="flex items-center space-x-2 pb-3 sm:pb-4 whitespace-nowrap">
          <div className="h-3 sm:h-4 w-3 sm:w-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-3 sm:h-4 w-24 sm:w-28 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>

      <div className="mb-6 sm:mb-8">
        <div className="h-4 sm:h-5 w-32 sm:w-40 bg-gray-200 rounded animate-pulse mb-3 sm:mb-4"></div>
        <div className="w-full max-w-xs sm:max-w-sm md:w-64 h-40 sm:h-48 bg-gray-200 rounded-lg animate-pulse flex items-center justify-center mx-auto sm:mx-0">
          <div className="w-6 sm:w-8 h-6 sm:h-8 bg-gray-300 rounded animate-pulse"></div>
        </div>
      </div>

      <div className="space-y-4 sm:space-y-6">
        <div>
          <div className="h-3 sm:h-4 w-10 sm:w-12 bg-gray-200 rounded animate-pulse mb-2"></div>
          <div className="w-full h-10 sm:h-12 bg-gray-100 border border-gray-200 rounded-md animate-pulse"></div>
        </div>

        <div>
          <div className="h-3 sm:h-4 w-28 sm:w-36 bg-gray-200 rounded animate-pulse mb-2"></div>
          <div className="w-full h-10 sm:h-12 bg-gray-100 border border-gray-200 rounded-md animate-pulse"></div>
        </div>

        <div>
          <div className="h-3 sm:h-4 w-8 sm:w-10 bg-gray-200 rounded animate-pulse mb-2"></div>
          <div className="w-full h-10 sm:h-12 bg-gray-100 border border-gray-200 rounded-md animate-pulse"></div>
        </div>
      </div>

      <div className="mt-6 sm:mt-8">
        <div className="h-9 sm:h-10 w-28 sm:w-32 bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

export default EmployerSettingsLoading;
