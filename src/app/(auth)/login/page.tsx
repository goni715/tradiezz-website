"use client"
import LoginForm from "@/components/auth/LoginForm";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <>
     <div className="min-h-screen flex flex-col justify-center md:justify-start md:flex-row bg-gray-50">
      {/* Left Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 p-3 sm:p-10">
        <div className="w-full max-w-md bg-white py-6 px-4 md:px-6 shadow-md rounded-md">
          <h2 className="text-3xl md:text-3xl font-bold mb-2 text-title text-center">Login to Continue</h2>
          {/* <p className="text-gray-600 mb-6">Welcome back! please enter your details</p> */}

          {/* Login Form */}
          <LoginForm/>

          <p className="mt-6 text-sm text-center">
            Don’t have a account?{' '}
            <Link href="/register" className="text-[#3AB0FF] hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center bg-blue-50 p-10">
        <div className="text-center">
          <Image src="/images/auth/login.png" alt="Login Illustration" width={600} height={600} />
        </div>
      </div>
    </div>
    </>
  )
}

export default LoginPage;