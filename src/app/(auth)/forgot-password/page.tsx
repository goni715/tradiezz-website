"use client"
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

const ForgostPasswordPage = () => {
  return (
    <>
     <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-md bg-white py-6 px-4 md:px-6 shadow-md rounded-md">
          <h2 className="text-3xl font-bold mb-2 text-title">Forgot Password?</h2>
          <p className="text-gray-600 text-sm sm:text-md mb-6">Enter your email address and we will send you a
          verification code</p>
          <ForgotPasswordForm/>
        </div>
    </div>
    </>
  )
}

export default ForgostPasswordPage;