

const CandidateNotFoundCard = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col items-center justify-center p-12 bg-red-50 border-red-200 rounded-lg border text-center">
        {/* Icon */}
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>

        {/* Main Message */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2">No Candidates Found</h3>

        {/* Description */}
        <p className="text-gray-600 mb-6 max-w-md">
          We couldn&apos;t find any users matching your search criteria. Try adjusting your filters or search terms.
        </p>
      </div>
    </div>
  )
}

export default CandidateNotFoundCard;
