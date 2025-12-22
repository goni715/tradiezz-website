"use client"
import Link from "next/link";
import { useState } from "react";
import CandidateRegisterForm from "@/components/auth/CandidateRegisterForm";
import EmployerRegisterForm from "@/components/auth/EmployerRegisterForm";

const RegisterPage = () => {
  const [userType, setUserType] = useState("Job Seeker");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-3 sm:p-6">
      <div className="w-full max-w-2xl bg-white py-6 px-4 md:px-6 shadow-md rounded-md">
        
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 text-center">
          Create an Account
        </h2>

        {/* Toggle Buttons */}
        <div className="flex gap-4 mb-6 justify-center">
          {["Job Seeker", "Employer"].map((type) => (
            <button
              key={type}
              onClick={() => setUserType(type)}
              className={`px-4 py-2 rounded-full cursor-pointer border text-sm font-medium transition ${
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
        {userType === "Job Seeker" ? (
          <CandidateRegisterForm />
        ) : (
          <EmployerRegisterForm />
        )}
        <p className="text-sm text-center mt-4 text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="text-[#3AB0FF] hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
