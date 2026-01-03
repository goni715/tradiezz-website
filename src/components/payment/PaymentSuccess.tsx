"use client"

import { CheckCircle } from "lucide-react"

const PaymentSuccess = () => {
    // const [copied, setCopied] = useState(false);


    // Mock data - replace with actual payment data from Stripe
    // const paymentData = {
    //     orderId: "ORD-2024-001234",
    //     amount: 99.99,
    //     currency: "USD",
    //     customerEmail: "customer@example.com",
    //     paymentMethod: "•••• •••• •••• 4242",
    //     transactionId: "pi_3OqIC92eZvKYlo2C0u2zqjzz",
    //     date: new Date().toLocaleDateString("en-US", {
    //         year: "numeric",
    //         month: "long",
    //         day: "numeric",
    //     }),
    // }

    // const copyTransactionId = () => {
    //     navigator.clipboard.writeText(paymentData.transactionId)
    //     setCopied(true)
    //     setTimeout(() => setCopied(false), 2000)
    // }

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                {/* Success Header */}
                <div className="text-center mb-8">
                    <div className="mx-auto flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-100 mb-4">
                        <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Payment Successful!</h1>
                    <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto">
                        Thank you for your purchase. Your payment has been processed successfully.
                    </p>
                </div>

                {/* Payment Details Card */}
                {/* <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8"> */}
                    {/* <div className="border-b border-gray-200 pb-6 mb-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Payment Details</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            <div>
                                <p className="text-sm font-medium text-gray-500 mb-1">Order ID</p>
                                <p className="text-base sm:text-lg font-semibold text-gray-900">{paymentData.orderId}</p>
                            </div>

                            <div>
                                <p className="text-sm font-medium text-gray-500 mb-1">Amount Paid</p>
                                <p className="text-base sm:text-lg font-semibold text-gray-900">
                                    ${paymentData.amount.toFixed(2)} {paymentData.currency}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm font-medium text-gray-500 mb-1">Payment Method</p>
                                <p className="text-base sm:text-lg font-semibold text-gray-900">{paymentData.paymentMethod}</p>
                            </div>

                            <div>
                                <p className="text-sm font-medium text-gray-500 mb-1">Date</p>
                                <p className="text-base sm:text-lg font-semibold text-gray-900">{paymentData.date}</p>
                            </div>
                        </div>
                    </div> */}

                    {/* Transaction ID */}
                    {/* <div className="mb-6">
                        <p className="text-sm font-medium text-gray-500 mb-2">Transaction ID</p>
                        <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                            <code className="text-sm font-mono text-gray-700 break-all">{paymentData.transactionId}</code>
                            <button
                                onClick={copyTransactionId}
                                className="ml-2 p-2 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors flex-shrink-0"
                                title="Copy transaction ID"
                            >
                                <Copy className="w-4 h-4" />
                            </button>
                        </div>
                        {copied && <p className="text-sm text-green-600 mt-1">Transaction ID copied!</p>}
                    </div> */}

                    {/* Email Confirmation */}
                    {/* <div className="bg-blue-50 rounded-lg p-4 flex items-start space-x-3">
                        <Mail className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <p className="text-sm font-medium text-blue-900">Confirmation email sent</p>
                            <p className="text-sm text-blue-700">A receipt has been sent to {paymentData.customerEmail}</p>
                        </div>
                    </div> */}
                {/* </div> */}
            </div>
        </div>
    )
}


export default PaymentSuccess;