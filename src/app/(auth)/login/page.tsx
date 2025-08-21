"use client"
import LoginForm from "@/components/auth/LoginForm";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-3 sm:p-6">
      <div className="w-full max-w-md bg-white py-6 px-4 md:px-6 shadow-md rounded-md">
        <h2 className="text-3xl font-bold mb-4 text-title text-center">
          Login to Continue
        </h2>
        <LoginForm />
        <p className="mt-6 text-sm text-center">
          Don’t have an account?{" "}
          <Link href="/register" className="text-[#3AB0FF] hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
