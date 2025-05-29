"use client"

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
    FaFacebookF,
    FaYoutube,
    FaInstagram,
    FaTwitter,
  } from 'react-icons/fa';
  
  const Footer = () => {
      const router = useRouter();
      const handleNavigate = (path: string) => {
        router.push(path);
      };

    
    return (
      <footer className="bg-primary text-gray-300 pt-12 pb-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-4">
          {/* Logo and Contact Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center mb-4">
              <Image src="/images/logo.png" alt="logo" width={110} height={110} />
            </div>
            <p>
              <span className="text-gray-400">Call now:</span>{" "}
              <span className="text-white font-semibold">(319) 555-0115</span>
            </p>
            <p className="text-sm text-gray-400">
              6391 Elgin St. Celina, Delaware 10299, New York
            </p>
          </div>

          {/* Quick Link */}
          <div>
            <h3 className="text-white font-semibold mb-3">Quick Link</h3>
            <ul className="space-y-2 text-sm">
              <li onClick={() => handleNavigate("/contact")} className="hover:text-white cursor-pointer">Contact</li>
              {/* <li onClick={() => handleNavigate("/")} className="hover:text-white cursor-pointer">Pricing</li> */}
              <li onClick={() => handleNavigate("/blog-list")} className="hover:text-white cursor-pointer">Blog</li>
            </ul>
          </div>
          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              {/* <li className="hover:text-white cursor-pointer">Faqs</li> */}
              <li onClick={() => handleNavigate("/terms-condition")} className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>
              <li onClick={() => handleNavigate("/terms-condition")} className="hover:text-white cursor-pointer">
                Terms & Conditions
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 max-w-7xl mx-auto">
          <p>@ 2024 Tradieez - Job Portal. All rights Reserved</p>
          {/* <div className="flex space-x-4 mt-4 md:mt-0">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
          </div> */}
          <div className="flex space-x-3 mt-4 md:mt-0">
            <div className="p-2 bg-transparent hover:bg-white rounded-full transition-colors duration-200 cursor-pointer">
              <FaFacebookF className="text-gray-300 hover:text-blue-900" />
            </div>
            <div className="p-2 bg-transparent hover:bg-white rounded-full transition-colors duration-200 cursor-pointer">
              <FaYoutube className="text-gray-300 hover:text-red-600" />
            </div>
            <div className="p-2 bg-transparent hover:bg-white rounded-full transition-colors duration-200 cursor-pointer">
              <FaInstagram className="text-gray-300 hover:text-pink-500" />
            </div>
            <div className="p-2 bg-transparent hover:bg-white rounded-full transition-colors duration-200 cursor-pointer">
              <FaTwitter className="text-gray-300 hover:text-blue-500" />
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  