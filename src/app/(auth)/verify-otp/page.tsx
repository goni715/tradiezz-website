"use client"
import VerifyotpForm from "@/components/auth/VerifyotpForm";

const VerifyOtpPage = () => {
  return (
    <>
     <div className="min-h-screen flex items-center justify-center  bg-gray-50">
        <div className="w-full max-w-md bg-white py-6 px-4 md:px-6 shadow-md rounded-md">
          <h2 className="text-3xl font-bold mb-2 text-title text-center">Verify OTP</h2>
          <p className="text-gray-600 mb-6 text-center"> Enter the 6-digit code sent to your email.</p>
          <VerifyotpForm/>
        </div>
    </div>
    </>
  )
}

export default VerifyOtpPage;