"use client"

import { useState } from "react"
import { Bookmark, Facebook, Instagram, MapPin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import RelatedJobs from "@/components/RelatedJobs/RelatedJobs"
import ApplyModal from "@/components/modal/ApplyModal"

export default function JobPostingPage() {
  const [bookmarked, setBookmarked] = useState(false)

  return (
    <>
    <div className="max-w-7xl mx-auto py-12 px-4 md:px-6 bg-white">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main content */}
        <div className="w-full lg:w-2/3">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-2xl font-semibold">Water Supply</h1>
                  <Badge variant="outline" className="bg-red-100 text-red-600 border-red-200">
                    Featured
                  </Badge>
                  <Badge variant="outline" className="bg-blue-100 text-blue-600 border-blue-200">
                    Part time
                  </Badge>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 mt-2 text-sm text-gray-500">
                  <a href="https://instagram.com" className="flex items-center gap-1 hover:text-gray-700">
                    <span className="text-gray-400">https://instagram.com</span>
                  </a>
                  <a href="tel:(406) 555-0120" className="flex items-center gap-1 hover:text-gray-700">
                    <span>(406) 555-0120</span>
                  </a>
                  <a href="mailto:career@instagram.com" className="flex items-center gap-1 hover:text-gray-700">
                    <span>career@instagram.com</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <Button
                variant="outline"
                size="icon"
                className="rounded-md border-gray-200"
                onClick={() => setBookmarked(!bookmarked)}
              >
                <Bookmark className={`h-5 w-5 ${bookmarked ? "fill-current text-blue-600" : ""}`} />
              </Button>
              {/*  */}
              <ApplyModal/>
            </div>
          </div>

          <div className="text-right text-sm text-gray-500 mb-6">
            Job expire in: <span className="text-red-500">June 30, 2021</span>
          </div>

          {/* Job Description */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Job Description</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Integer aliquet pretium consequat. Donec et sapien id leo accumsan pellentesque eget maximus tellus.
                Duis et est ac leo rhoncus tincidunt vitae vehicula augue. Donec in suscipit diam.
              </p>
              <p>
                Pellentesque quis justo sit amet arcu commodo sollicitudin. Integer finibus blandit condimentum. Vivamus
                sit amet ligula ullamcorper, pulvinar ante id, tristique erat. Quisque sit amet aliquam urna. Maecenas
                blandit felis id massa sodales finibus. Integer bibendum eu nulla eu sollicitudin.
              </p>
              <p>
                Sed lobortis diam tincidunt accumsan faucibus. Quisque blandit augue quis turpis auctor, dapibus euismod
                ante ultricies. Ut non felis lacinia turpis feugiat euismod at id magna. Sed ut orci arcu. Suspendisse
                sollicitudin faucibus aliquet.
              </p>
              <p>
                Nam dapibus consectetur erat in euismod. Cras urna augue, mollis venenatis augue sed, porttitor aliquet
                nibh. Sed tristique dictum elementum. Nulla imperdiet sit amet quam eget lobortis. Etiam in neque sit
                amet orci interdum tincidunt.
              </p>
            </div>
          </div>

          {/* Responsibilities */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Quisque semper gravida est et consectetur.</li>
              <li>Curabitur blandit lorem velit, vitae pretium leo placerat eget.</li>
              <li>Morbi mattis in ipsum ac tempus.</li>
              <li>Curabitur eu vehicula libero. Vestibulum sed purus ullamcorper, lobortis lectus nec.</li>
              <li>vulputate turpis. Quisque ante odio, iaculis a porttitor sit amet.</li>
              <li>lobortis vel lectus. Nulla at risus ut diam.</li>
              <li>commodo feugiat. Nullam laoreet, diam placerat dapibus tincidunt.</li>
              <li>odio metus posuere lorem, id condimentum erat velit nec neque.</li>
              <li>dui sodales ut. Curabitur tempus augue.</li>
            </ul>
          </div>

          {/* Share this job */}
          <div className="mt-12">
            <p className="text-gray-600 mb-3">Share this job:</p>
            <div className="flex gap-2 flex-wrap">
              <Button variant="outline" size="sm" className="flex items-center gap-2 cursor-pointer">
                <Facebook className="h-4 w-4" />
                Facebook
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2 cursor-pointer">
                <Twitter className="h-4 w-4" />
                Facebook
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0z"></path>
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"></path>
                  <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                </svg>
                Pinterest
              </Button>
            </div>
          </div>
        </div>

        {/* Job Overview Sidebar */}
        <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
          <div className="border border-gray-300 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-6">Job Overview</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Job Posted */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">JOB POSTED:</p>
                  <p className="font-medium">14 June, 2021</p>
                </div>
              </div>

              {/* Job Expire In */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">JOB EXPIRE IN:</p>
                  <p className="font-medium">14 July, 2021</p>
                </div>
              </div>

              {/* Education */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">EDUCATION</p>
                  <p className="font-medium">Graduation</p>
                </div>
              </div>

              {/* Salary */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                    <line x1="2" y1="10" x2="22" y2="10"></line>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">SALARY:</p>
                  <p className="font-medium">$50k-80k/month</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">LOCATION:</p>
                  <p className="font-medium">New York, USA</p>
                </div>
              </div>

              {/* Job Type */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">JOB TYPE:</p>
                  <p className="font-medium">Part Time</p>
                </div>
              </div>

              {/* Experience */}
              <div className="flex items-start gap-3 col-span-1 md:col-span-2">
                <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">EXPERIENCE</p>
                  <p className="font-medium">10-15 Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <RelatedJobs/>
    </>
  )
}
