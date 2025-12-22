"use client";

import VerifyAccountForm from "@/components/auth/VerifyAccountForm";
import { useRouter } from "next/navigation";
import type React from "react";

const VerifyAccountPage = () => {
  const router = useRouter();

  const handleBackToLogin = () => {
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <VerifyAccountForm />

          {/* Back to Login */}
          <div className="pt-4 border-t border-gray-200">
            <button
              onClick={handleBackToLogin}
              className="w-full text-gray-600 hover:text-gray-800 font-medium text-sm transition-colors flex items-center justify-center space-x-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span>Back to Login</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyAccountPage;
