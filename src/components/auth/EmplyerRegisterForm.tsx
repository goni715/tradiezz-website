"use client";

import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";


const EmplyerRegisterForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);


  return (
    <>
      <form className="space-y-4">
      <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Employer Name
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
            Phone Number(only USA)
          </label>
          <input
            type="text"
            id="phone"
            className="mt-1 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-500 px-4 py-2"
            placeholder="enter your phone number"
          />
        </div>
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
              onClick={()=> setShowPassword((prev) => !prev)}
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
              onClick={()=> setShowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
          </div>
        </div>

        <button className="w-full bg-primary cursor-pointer text-white py-2 rounded-md font-semibold transition-colors duration-100">
          Sign Up
        </button>
      </form>
    </>
  );
};

export default EmplyerRegisterForm;
