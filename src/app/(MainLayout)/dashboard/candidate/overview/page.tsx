"use client";
import Image from "next/image";
import {
  Bookmark,
  BriefcaseIcon,
  ChevronRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

const CandidateOverviewPage = () => {
    const router = useRouter();
  
  return (
    <>
      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="mx-auto max-w-5xl p-4 md:p-6 lg:p-8">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-xl font-semibold text-gray-900">
              Hello, Esther Howard
            </h1>
            <p className="text-sm text-gray-500">
              Here is your daily activities and job alerts
            </p>
          </div>

          {/* Stats Cards */}
          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
            <div className="flex items-center justify-between rounded-lg bg-blue-50 p-4">
              <div>
                <div className="text-2xl font-bold text-gray-900">589</div>
                <div className="text-sm text-gray-500">Applied jobs</div>
              </div>
              <div className="rounded-md bg-white p-3 shadow-sm">
                <BriefcaseIcon className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-amber-50 p-4">
              <div>
                <div className="text-2xl font-bold text-gray-900">238</div>
                <div className="text-sm text-gray-500">Favorite jobs</div>
              </div>
              <div className="rounded-md bg-white p-3 shadow-sm">
                <Bookmark className="h-6 w-6 text-amber-500" />
              </div>
            </div>
          </div>

          {/* Profile Completion Alert */}
          <div className="mb-8 overflow-hidden rounded-lg bg-red-200 p-4 sm:p-6">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-1 items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-red-300">
                  <Image
                    src="/images/profile.png"
                    alt="Profile"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">
                    Your profile editing is not completed.
                  </h3>
                  <p className="text-sm text-gray-700">
                    Complete your profile editing & build your custom Resume
                  </p>
                </div>
              </div>
              <button onClick={()=> router.push('/dashboard/employer/settings')} className="flex items-center gap-2 cursor-pointer rounded-md bg-white px-4 py-2 text-sm font-medium text-red-500 shadow-sm hover:bg-gray-50">
                Edit Profile
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Recently Applied Jobs */}
          <div className="mb-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">
                Recently Applied
              </h2>
              <a
                href="#"
                className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                View all
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>

            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
              {/* Table Header */}
              <div className="hidden grid-cols-12 gap-4 bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 md:grid">
                <div className="col-span-4">Job</div>
                <div className="col-span-3">Date Applied</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-3 text-right">Action</div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-200">
                {/* Job Item 1 */}
                <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-12 md:gap-6 md:p-6 hover:bg-blue-50 duration-200">
                  <div className="col-span-4 flex items-start gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-green-500 text-white">
                      <span className="font-bold">Up</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        Water Supply
                      </div>
                      <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
                        <span className="inline-flex items-center">
                          <svg
                            className="mr-1 h-3 w-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Washington
                        </span>
                        <span className="inline-flex items-center">
                          <svg
                            className="mr-1 h-3 w-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"
                              clipRule="evenodd"
                            />
                          </svg>
                          $50k-80k/month
                        </span>
                        <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800">
                          Part Time
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-3 flex items-center text-sm text-gray-500 md:justify-start">
                    <span className="md:hidden font-medium text-gray-700 mr-1">
                      Date:{" "}
                    </span>
                    Feb 2, 2019 19:28
                  </div>
                  <div className="col-span-2 flex items-center">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      <svg
                        className="-ml-0.5 mr-1.5 h-2 w-2 text-green-400"
                        fill="currentColor"
                        viewBox="0 0 8 8"
                      >
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                      Active
                    </span>
                  </div>
                  <div className="col-span-3 flex items-center justify-end">
                    <button className="rounded-md bg-gray-100 hover:bg-primary border border-gray-300 hover:border-primary hover:text-white px-4 py-2 text-sm font-medium text-gray-700 cursor-pointer duration-200">
                      View Details
                    </button>
                  </div>
                </div>

                {/* Job Item 2 */}
                <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-12 md:gap-6 md:p-6 hover:bg-blue-50 duration-200">
                  <div className="col-span-4 flex items-start gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-pink-500 text-white">
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        Water Supply
                      </div>
                      <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
                        <span className="inline-flex items-center">
                          <svg
                            className="mr-1 h-3 w-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Dhaka
                        </span>
                        <span className="inline-flex items-center">
                          <svg
                            className="mr-1 h-3 w-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"
                              clipRule="evenodd"
                            />
                          </svg>
                          $50k-80k/month
                        </span>
                        <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-xs font-medium text-indigo-800">
                          Full Time
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-3 flex items-center text-sm text-gray-500 md:justify-start">
                    <span className="md:hidden font-medium text-gray-700 mr-1">
                      Date:{" "}
                    </span>
                    Dec 7, 2019 23:26
                  </div>
                  <div className="col-span-2 flex items-center">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      <svg
                        className="-ml-0.5 mr-1.5 h-2 w-2 text-green-400"
                        fill="currentColor"
                        viewBox="0 0 8 8"
                      >
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                      Active
                    </span>
                  </div>
                  <div className="col-span-3 flex items-center justify-end">
                    <button className="rounded-md  bg-gray-100 cursor-pointer hover:bg-primary border border-gray-300 hover:border-primary hover:text-white px-4 py-2 text-sm font-medium text-gray-700 duration-200">
                      View Details
                    </button>
                  </div>
                </div>

                {/* Job Item 3 */}
                <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-12 md:gap-6 md:p-6 hover:bg-blue-50 duration-200">
                  <div className="col-span-4 flex items-start gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-black text-white">
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        Water Supply
                      </div>
                      <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
                        <span className="inline-flex items-center">
                          <svg
                            className="mr-1 h-3 w-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Brazil
                        </span>
                        <span className="inline-flex items-center">
                          <svg
                            className="mr-1 h-3 w-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"
                              clipRule="evenodd"
                            />
                          </svg>
                          $50k-80k/month
                        </span>
                        <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800">
                          Temporary
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-3 flex items-center text-sm text-gray-500 md:justify-start">
                    <span className="md:hidden font-medium text-gray-700 mr-1">
                      Date:{" "}
                    </span>
                    Feb 2, 2019 19:28
                  </div>
                  <div className="col-span-2 flex items-center">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      <svg
                        className="-ml-0.5 mr-1.5 h-2 w-2 text-green-400"
                        fill="currentColor"
                        viewBox="0 0 8 8"
                      >
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                      Active
                    </span>
                  </div>
                  <div className="col-span-3 flex items-center justify-end">
                    <button className="rounded-md bg-gray-100 text-gray-700 hover:bg-primary border border-gray-300 hover:border-primary hover:text-white duration-200 cursor-pointer px-4 py-2 text-sm font-medium">
                      View Details
                    </button>
                  </div>
                </div>

                {/* Job Item 4 */}
                <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-12 md:gap-6 md:p-6 hover:bg-blue-50 duration-200">
                  <div className="col-span-4 flex items-start gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white text-blue-500 shadow-sm">
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 2.5H3c-.55 0-1 .45-1 1v17c0 .55.45 1 1 1h18c.55 0 1-.45 1-1v-17c0-.55-.45-1-1-1zm-1 16.5H4v-15h16v15zm-5-2h4v-4h-4v4zm-3-5h-4v1h4v-1zm0 2h-4v1h4v-1zm0 2h-4v1h4v-1zm8-6H4v-3h16v3z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        Water Supply
                      </div>
                      <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
                        <span className="inline-flex items-center">
                          <svg
                            className="mr-1 h-3 w-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Wisconsin
                        </span>
                        <span className="inline-flex items-center">
                          <svg
                            className="mr-1 h-3 w-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"
                              clipRule="evenodd"
                            />
                          </svg>
                          $50k-80k/month
                        </span>
                        <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800">
                          Contract Base
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-3 flex items-center text-sm text-gray-500 md:justify-start">
                    <span className="md:hidden font-medium text-gray-700 mr-1">
                      Date:{" "}
                    </span>
                    Dec 7, 2019 23:26
                  </div>
                  <div className="col-span-2 flex items-center">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      <svg
                        className="-ml-0.5 mr-1.5 h-2 w-2 text-green-400"
                        fill="currentColor"
                        viewBox="0 0 8 8"
                      >
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                      Active
                    </span>
                  </div>
                  <div className="col-span-3 flex items-center justify-end">
                    <button onClick={()=>router.push(`/job-details/${3}`)} className="rounded-md bg-gray-100 text-primary border border-gray-300 hover:border-primary hover:bg-primary hover:text-white duration-200 cursor-pointer px-4 py-2 text-sm font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          {/* <footer className="mt-12 text-center text-xs text-gray-500">
            © 2024 Tradeez - Job Portal. All rights Reserved
          </footer> */}
        </div>
      </main>
    </>
  );
};

export default CandidateOverviewPage;
