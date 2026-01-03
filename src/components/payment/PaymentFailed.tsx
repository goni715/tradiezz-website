
const PaymentFailed = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
        {/* Error Icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
          <svg
            className="h-8 w-8 text-red-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Text Content */}
        <div className="mt-4 text-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Payment Failed
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            We couldn’t process your payment. Please check your payment details
            and try again.
          </p>
        </div>

        {/* Info Box */}
        <div className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          Possible reasons:
          <ul className="mt-1 list-disc pl-5">
            <li>Insufficient balance</li>
            <li>Expired or invalid card</li>
            <li>Bank authorization failed</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailed;
