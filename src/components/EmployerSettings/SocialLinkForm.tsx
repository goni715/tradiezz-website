"use client";


import { useState } from "react";
import {
  Loader2,
} from "lucide-react";
import { ImFacebook2 } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const SocialLinkForm = () => {
 
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    //console.log("Submitted social links:", socialLinks);
    setIsSubmitting(false);
  };

  return (
    <div className="p-4 bg-white rounded-lg">
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
         
          <div className="space-y-1">
           
            <div className="flex items-center">
              <div className="relative">
                <button
                  type="button"
                  className="flex items-center justify-between w-[120px] px-3 py-2 border border-gray-300 rounded-l-md bg-white text-sm"
                >
                  <span className="flex items-center">
                    <ImFacebook2 className="h-4 w-4 mr-2 text-blue-500" />
                    Facebook
                  </span>
                </button>
              </div>
              <input
                type="text"
                placeholder="Profile link/url..."
                className="flex-1 px-3 py-2 border border-l-0 border-gray-300 rounded-r-md focus:outline-none focus:border-blue-500 focus:ring-blue-500 text-sm"
              />
            </div>
          </div>
          <div className="space-y-1">
            
            <div className="flex items-center">
              <div className="relative">
                <button
                  type="button"
                  className="flex items-center justify-between w-[120px] px-3 py-2 border border-gray-300 rounded-l-md bg-white text-sm"
                >
                  <span className="flex items-center">
                    <FaXTwitter className="h-4 w-4 mr-2 text-[#1DA1F2]" />
                    Twitter
                  </span>
                </button>
              </div>
              <input
                type="text"
                placeholder="Profile link/url..."
                className="flex-1 px-3 py-2 border border-l-0 border-gray-300 rounded-r-md focus:outline-none focus:border-blue-500 focus:ring-blue-500 text-sm"
              />
            </div>
          </div>
          <div className="space-y-1">
           
            <div className="flex items-center">
              <div className="relative">
                <button
                  type="button"
                  className="flex items-center justify-between w-[120px] px-3 py-2 border border-gray-300 rounded-l-md bg-white text-sm"
                >
                  <span className="flex items-center">
                    <FaInstagram className="h-4 w-4 mr-2 text-[#E1306C]" />
                    Instagram
                  </span>
                </button>
              </div>
              <input
                type="text"
                placeholder="Profile link/url..."
                className="flex-1 px-3 py-2 border border-l-0 border-gray-300 rounded-r-md focus:outline-none focus:border-blue-500 focus:ring-blue-500 text-sm"
              />
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center">
              <div className="relative">
                <button
                  type="button"
                  className="flex items-center justify-between w-[120px] px-3 py-2 border border-gray-300 rounded-l-md bg-white text-sm"
                >
                  <span className="flex items-center">
                    <FaYoutube className="h-4 w-4 mr-2 text-red-500" />
                    Youtube
                  </span>
                </button>
              </div>
              <input
                type="text"
                placeholder="Profile link/url..."
                className="flex-1 px-3 py-2 border border-l-0 border-gray-300 rounded-r-md focus:outline-none focus:border-blue-500 focus:ring-blue-500 text-sm"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-6 w-32 flex items-center cursor-pointer justify-center px-4 py-2 bg-primary hover:bg-[#2b4773] rounded-md text-sm text-white font-medium transition-colors duration-100 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Saving...
            </>
          ) : (
            "Save Changes"
          )}
        </button>
      </form>
    </div>
  );
};

export default SocialLinkForm;
