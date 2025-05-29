"use client"
import ResetPasswordForm from "@/components/auth/ResetPasswordForm"
import Image from "next/image"

const ResetPasswordPage = () => {
  return (
    <>
     <div className="min-h-screen flex flex-col justify-center md:justify-start md:flex-row bg-gray-50">
      {/* Left Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 p-3 md:p-10">
        <div className="w-full max-w-md bg-white py-6 px-4 md:px-6 shadow-md rounded-md">
          <h2 className=" text-2xl sm:text-3xl md:text-3xl font-bold  text-title mb-2">Create a New Password</h2>
          <p className="text-gray-600 mb-6">Enter your new password below to regain access to your account.</p>

          {/* Reset Password Form */}
          <ResetPasswordForm/>
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center bg-blue-50 p-10">
        <div className="text-center">
          <Image src="/images/auth/reset.png" alt="Login Illustration" width={600} height={600} />
        </div>
      </div>
    </div>
    </>
  )
}

export default ResetPasswordPage