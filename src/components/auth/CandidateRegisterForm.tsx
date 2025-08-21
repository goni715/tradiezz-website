"use client";

import { tradeOptions } from "@/data/options";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const CandidateRegisterForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [trade, setTrade] = useState("");
  const [subOptions, setSuboptions] = useState([]);




  return (
    <>
      <form className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-2">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Candidate Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-500 px-4 py-2"
            placeholder="enter your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-500 px-4 py-2"
            placeholder="enter your email here"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number(only UK)
          </label>
          <input
            type="text"
            id="phone"
            className="mt-1 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-500 px-4 py-2"
            placeholder="enter your phone number"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Trade Type
          </label>
          <div className="relative">
            <select
              value={trade}
              onChange={(e)=>setTrade(e.target.value)}
              className={`w-full px-3 py-2 border text-gray-700 disabled:bg-gray-200 rounded-md appearance-none focus:outline-none ${"border-gray-300 focus:border-blue-500"}`}
            >
              <option value="">Select</option>
              {tradeOptions?.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Sub Trade Type
          </label>
          <div className="relative">
            <select
              value={trade}
              className={`w-full px-3 py-2 border text-gray-700 disabled:bg-gray-200 rounded-md appearance-none focus:outline-none ${"border-gray-300 focus:border-blue-500"}`}
            >
              <option value="">Select</option>
              {tradeOptions?.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="mt-1 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-500 px-4 py-2 pr-10"
              placeholder="********"
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center text-xl text-gray-500 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
          </div>
        </div>
        <div>
          <label
            htmlFor="confirmPass"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPass"
              className="mt-1 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-500 px-4 py-2 pr-10"
              placeholder="********"
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center text-xl text-gray-500 cursor-pointer"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
          </div>
        </div>


        <div className="col-span-2 space-y-4">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                type="checkbox"
                //checked={checked}
                //onChange
                required
                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="right" className="font-medium text-gray-700">
                I confirm that I have the Right to Work in the UK{" "}
                <span className="text-red-500 ml-1">*</span>
              </label>
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <button className="w-full bg-primary cursor-pointer text-white py-2 rounded-md font-semibold transition-colors duration-100">
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};

export default CandidateRegisterForm;
