"use client"
import { SuccessToast } from "@/helper/ValidationHelper";
import { useEffect, useRef, useState } from "react";

const VerifyotpForm = () => {
  const [code, setCode] = useState<string[]>(new Array(4).fill(""));
  const [seconds, setSeconds] = useState(120);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const isLoading = false;
  const isDisabled = code.find((cv) => cv == "") == ""; //check if any code is empty string

  const handleChange = (element: HTMLInputElement, index: number) => {
    const value = element.value.replace(/[^0-9]/g, "");
    const newCode = [...code];

    if (value) {
      newCode[index] = value;
      setCode(newCode);

      if (index < 4 && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  // Timer countdown
  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [seconds]);

  const handleResend = () => {
    if (!canResend) return;
    // trigger resend OTP logic here
    setSeconds(60);
    setCanResend(false);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      const newCode = [...code];
      if (code[index]) {
        // Clear current value
        newCode[index] = "";
        setCode(newCode);
      } else if (index > 0) {
        // Move to previous input
        inputRefs.current[index - 1]?.focus();
        const updatedCode = [...code];
        updatedCode[index - 1] = "";
        setCode(updatedCode);
      }
    }
  };

  const handleVerify = () => {
    console.log(code);
    SuccessToast("Verify Success");
  };
  return (
    <>
      <form className="space-y-4">
        {/* Code Inputs */}
        <div className="flex justify-center gap-3 mb-6">
          {code.map((digit, idx) => (
            <input
              key={idx}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target, idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              ref={(el) => {
                inputRefs.current[idx] = el;
              }}
              className="w-12 h-12 border border-gray-300 rounded-md text-center text-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          ))}
        </div>

        <button
          onClick={handleVerify}
          disabled={isDisabled || isLoading}
          className="w-full bg-primary cursor-pointer text-white py-2 rounded-md font-semibold transition-colors duration-100 disabled:cursor-not-allowed"
        >
          {isLoading ? "Verifying..." : "Verify"}
        </button>
        {/* Resend & Timer */}
        <div className="text-center text-sm mb-6">
          {canResend ? (
            <button
              onClick={handleResend}
              className="text-blue-600 font-medium hover:underline"
            >
              Resend Code
            </button>
          ) : (
            <span className="text-gray-500">
              Resend code in
              {/* <span className="font-semibold">{seconds}s</span> */}
              <span className="font-semibold pl-2">
                {String(Math.floor(seconds / 60)).padStart(2, "0")}:
                {String(seconds % 60).padStart(2, "0")}
              </span>
            </span>
          )}
        </div>
      </form>
    </>
  );
};

export default VerifyotpForm;
