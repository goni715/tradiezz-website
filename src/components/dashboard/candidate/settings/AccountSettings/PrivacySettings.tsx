"use client";
import { useState } from "react";

const PrivacySettings = () => {
   const [profileIsPublic, setProfileIsPublic] = useState(true)

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Profile Privacy</h2>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="font-medium">YES</span>
                  <p className="text-sm text-gray-500">Your profile is public now</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={profileIsPublic}
                    onChange={() => setProfileIsPublic(!profileIsPublic)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>
        </div>

    </>
  )
}

export default PrivacySettings;