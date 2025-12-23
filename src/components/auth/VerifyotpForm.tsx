"use client";

import { getEmail } from "@/helper/SessionHelper";
import {
  useForgotPasswordResendOtpMutation,
  useForgotPasswordVerifyOtpMutation,
} from "@/redux/features/auth/authApi";
import { SetVerifyOtpError } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import FormError from "../validation/FormError";

const VerifyOtpForm = () => {
  const router = useRouter();
  const [verificationCode, setVerificationCode] = useState("");
  const [countdown, setCountdown] = useState(60);

  const dispatch = useAppDispatch();
  const { VerifyOtpError } = useAppSelector((state) => state.auth);
  const [forgotPasswordVerifyOtp, { isLoading, isSuccess: verifySuccess }] =
    useForgotPasswordVerifyOtpMutation();
  const [
    forgotPasswordResendOtp,
    { isLoading: resendLoading, isSuccess: resendSuccess },
  ] = useForgotPasswordResendOtpMutation();


  useEffect(() => {
    setTimeout(() => {
      // Countdown timer
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }, 2000);
  }, []);



  //if verify success
  useEffect(() => {
    if (verifySuccess) {
      router.push("/reset-password");
    }
  }, [verifySuccess, router]);

  //handle verify
  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(SetVerifyOtpError(""));
    
    forgotPasswordVerifyOtp({
      otp: verificationCode,
      email: getEmail()
    });
  };


  
  //if code is resent successfully
  useEffect(() => {
    if (!resendLoading && resendSuccess) {
      setCountdown(60);
      // Restart countdown
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  }, [resendLoading, resendSuccess]);



  //handle resend code
  const handleResendCode = () => {
    if (countdown === 0) {
      setVerificationCode("");
      forgotPasswordResendOtp({
        email: getEmail()
      });
    }
  };

  return (
    <>
      {VerifyOtpError && <FormError message={VerifyOtpError} />}
      <div className="space-y-5">
        <form onSubmit={handleVerifyCode} className="space-y-5">
          <div className="space-y-2">
            <label
              htmlFor="code"
              className="block text-sm font-medium text-gray-700"
            >
              Verification Code
            </label>
            <div className="relative">
              <input
                id="code"
                type="text"
                value={verificationCode}
                onChange={(e) =>
                  setVerificationCode(
                    e.target.value.replace(/\D/g, "").slice(0, 6)
                  )
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-center text-2xl font-mono tracking-widest"
                placeholder="000000"
                maxLength={6}
                required
              />
            </div>
            <p className="text-xs text-gray-500 text-center">
              Enter the 6-digit code sent to your email
            </p>
          </div>

          <button
            type="submit"
            disabled={isLoading || verificationCode.length !== 6}
            className="w-full cursor-pointer bg-linear-to-r from-green-500 to-emerald-600 text-white py-3 px-4 rounded-lg font-medium hover:from-green-600 hover:to-emerald-700 focus:ring-4 focus:ring-green-200 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Verifying...</span>
              </div>
            ) : (
              "Verify"
            )}
          </button>
        </form>
        {/* Resend Code */}
        <div className="text-center space-y-3">
          <p className="text-sm text-gray-600">{"Didn't receive the code?"}</p>
          <button
            onClick={handleResendCode}
            disabled={countdown > 0 || resendLoading}
            className="relative inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-linear-to-r from-green-500 to-emerald-600 rounded-lg hover:from-green-600 hover:to-emerald-700 focus:ring-4 focus:ring-green-200 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden"
          >
            {/* Background Animation */}
            {resendLoading && (
              <div className="absolute inset-0 bg-linear-to-r from-green-400 to-emerald-500 animate-pulse"></div>
            )}

            {/* Loading Spinner */}
            {resendLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex space-x-1">
                  <div
                    className="w-2 h-2 bg-white rounded-full animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-white rounded-full animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-white rounded-full animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  ></div>
                </div>
              </div>
            )}

            <span
              className={`relative z-10 flex items-center space-x-2 transition-opacity duration-300 ${
                resendLoading ? "opacity-0" : "opacity-100"
              }`}
            >
              {countdown > 0 ? (
                <>
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Resend in {countdown}s</span>
                </>
              ) : (
                <>
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
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  <span>Resend Code</span>
                </>
              )}
            </span>

            {/* Ripple Effect */}
            {resendLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-white border-opacity-30 rounded-full animate-ping"></div>
                <div
                  className="absolute w-6 h-6 border-2 border-white border-opacity-50 rounded-full animate-ping"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>
            )}
          </button>

          {/* Loading Text */}
          {resendLoading && (
            <div className="flex items-center justify-center space-x-2 text-green-600 animate-fade-in">
              <div className="w-4 h-4 border-2 border-green-500 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-sm font-medium">Sending new code...</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default VerifyOtpForm;
