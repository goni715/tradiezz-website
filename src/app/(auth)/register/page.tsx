"use client"
import CandidateRegisterForm from "@/components/auth/CandidateRegisterForm";
import EmplyerRegisterForm from "@/components/auth/EmplyerRegisterForm";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const RegisterPage = () => {
  const [userType, setUserType] = useState("Candidate");

  return (
    <div className="min-h-screen flex justify-center md:justify-start md:flex-row bg-gray-50">
      {/* Left Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-3 md:10 bg-gray-50">
      <div className="w-full max-w-md bg-white py-6 px-4 md:px-6 shadow-md rounded-md">

        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3 text-center">Create an Account</h2>
        {/* <p className="text-gray-600 mb-4">Enter Your Personal Data</p> */}
       

        {/* Toggle Buttons */}
        <div className="flex gap-4 mb-6">
          {["Candidate", "Employer"].map((type) => (
            <button
            key={type}
            onClick={() => setUserType(type)}
            className={`px-4 py-2 cursor-pointer rounded-full border text-sm font-medium ${
              userType === type
              ? "bg-[#22385C] text-white"
              : "text-[#22385C] bg-white border-[#22385C]"
              }`}
              >
              {type}
            </button>
          ))}
        </div>
        
        {/* Register Form */}
        {
          userType=== "Candidate" ? (
            <CandidateRegisterForm/>
          ) : (
            <EmplyerRegisterForm/>
          )
        }

        <p className="text-sm text-center mt-4 text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="text-[#3AB0FF] hover:underline">
            Sign In
          </Link>
        </p>
        </div>
      </div>

      {/* Right Side Illustration */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-blue-50 p-6">
        <Image
          src="/images/auth/register.png"
          alt="Signup"
          width={600} height={600}
        />
      </div>
    </div>
  );
}

export default RegisterPage;
