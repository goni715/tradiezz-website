"use client";

import { Mail, MapPin, Phone } from "lucide-react";

const ContactForm = () => {
  return (
    <>
      {/* Contact Info Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  id="location"
                  type="text"
                  placeholder="Enter Your Location"
                  className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

             <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  id="phone"
                  type="text"
                  placeholder="Enter contact number"
                  className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  placeholder="Email address"
                  className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                />
              </div>
            </div>

            <button className="px-4 py-2 bg-primary hover:bg-[#2b4773] cursor-pointer text-white rounded-md focus:outline-none">
              Save Changes
            </button>
          </div>
        </div>
    </>
  )
}

export default ContactForm