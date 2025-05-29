"use client";

import DeleteApplicationModal from "@/components/modal/application/DeleteApplicationModal";
import Image from "next/image";

const ApplicationItem = () => {
  return (
    <>
      <div className="p-4 shadow-sm rounded-md">
            <div className="flex items-start gap-3">
              {/* <div className="w-12 h-12 bg-gray-500 rounded-full flex-shrink-0"></div> */}
              <Image
                src="/images/avatar.png"
                alt="profile"
                width={600}
                height={600}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium">Darrell</h3>
                  <div className="relative group">
                   <DeleteApplicationModal/>
                  </div>
                </div>
                <p className="text-sm text-gray-500">Water Supply</p>
              </div>
            </div>
            <ul className="mt-4 space-y-1 text-sm">
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">•</span>
                <span>7 Years Experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">•</span>
                <span>Education: Intermediate Degree</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">•</span>
                <span>Applied: Jan 23, 2022</span>
              </li>
            </ul>
            <button className="mt-3 text-blue-600 hover:text-blue-800 flex items-center text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download CV
            </button>
          </div>
    </>
  )
}

export default ApplicationItem