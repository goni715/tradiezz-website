const PaymentCancel = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
        {/* Icon */}
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <div className="mt-4 text-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Payment Cancelled
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Your payment was not completed. No charges have been made to your
            account.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancel;
