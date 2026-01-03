"use client"

import { CheckCircle } from "lucide-react"

const PaymentSuccess = () => {

    return (
        <div className="min-h-screen bg-linear-to-br from-green-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
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
            </div>
        </div>
    )
}


export default PaymentSuccess;