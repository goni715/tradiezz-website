const MyJobsLoading = () => {
    return (
        <>
            <div className="w-full">
                {/* Skeleton Grid - Responsive: 1 col on mobile, 2 on tablet, 3 on desktop */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                            {/* Header with Title and Icon */}
                            <div className="mb-4 flex items-center justify-between">
                                <div className="h-6 w-32 animate-pulse rounded bg-gray-200"></div>
                                <div className="h-5 w-5 animate-pulse rounded-full bg-gray-200"></div>
                            </div>

                            {/* Badge/Label */}
                            <div className="mb-4 h-6 w-20 animate-pulse rounded-full bg-purple-100"></div>

                            {/* Status Line */}
                            <div className="mb-3 flex items-center justify-between">
                                <div className="h-4 w-12 animate-pulse rounded bg-gray-200"></div>
                                <div className="h-4 w-16 animate-pulse rounded bg-gray-200"></div>
                            </div>

                            {/* Applications Line */}
                            <div className="mb-6 flex items-center justify-between">
                                <div className="h-4 w-24 animate-pulse rounded bg-gray-200"></div>
                                <div className="flex items-center gap-2">
                                    <div className="h-4 w-4 animate-pulse rounded bg-gray-200"></div>
                                    <div className="h-4 w-12 animate-pulse rounded bg-gray-200"></div>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="mb-4 h-px bg-gray-100"></div>

                            {/* View Details Footer */}
                            <div className="flex items-center justify-between">
                                <div className="h-4 w-20 animate-pulse rounded bg-blue-100"></div>
                                <div className="flex items-center gap-2">
                                    <div className="h-4 w-4 animate-pulse rounded bg-gray-200"></div>
                                    <div className="h-4 w-4 animate-pulse rounded bg-gray-200"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default MyJobsLoading;