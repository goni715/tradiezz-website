"use client"

import Image from "next/image"
import { useState } from "react"

const candidateData = {
  _id: "695df2b1eddfd47d7d941bfd",
  jobId: "69524eb0c6f425fde47bfd76",
  title: "Windows & Doors Installer",
  category: "Windows, Doors & Cladding",
  startDate: "2026-01-30T00:00:00.000Z",
  endDate: null,
  deadline: "2026-01-15T00:00:00.000Z",
  minRange: 10,
  maxRange: 15,
  address: "London, Greater London, England, United Kingdom",
  postalCode: "SW1A 2DX",
  experience: "1_3_years",
  jobType: "freelance",
  rateType: "weekly",
  candidateUserId: "6947b1d9d302e270f282988b",
  candidateName: "Xeyek Ka",
  candidateEmail: "xeyek85698@gamintor.com",
  candidateImg:
    "https://res.cloudinary.com/dvtgqgnkg/image/upload/v1767845829/Tradieez/candidate/h0ntprbhvwceybbvr36i.jpg",
  candidateDescription: `
    <p style="margin-bottom: 12px; line-height: 1.6;">
      I am a skilled Windows & Doors Installer with extensive experience in residential and commercial projects.
    </p>
    <h4 style="font-weight: bold; margin: 16px 0 8px 0;">Key Skills:</h4>
    <ul style="margin-left: 20px; margin-bottom: 12px;">
      <li style="margin-bottom: 6px;">Professional window and door installation</li>
      <li style="margin-bottom: 6px;">High-quality finishing and sealing techniques</li>
      <li style="margin-bottom: 6px;">Safety compliance and project management</li>
      <li style="margin-bottom: 6px;">Customer satisfaction focused</li>
    </ul>
    <p style="margin-bottom: 12px; line-height: 1.6;">
      Reliable, professional, and committed to delivering quality work on time.
    </p>
  `,
  status: "applied",
  workStatus: "pending",
  createdAt: "2026-01-07T05:44:17.129Z",
}

const statusBadgeColor = {
  applied: { bg: "#EBF5FF", text: "#1E40AF", label: "Applied" },
  accepted: { bg: "#ECFDF5", text: "#065F46", label: "Accepted" },
  rejected: { bg: "#FEF2F2", text: "#991B1B", label: "Rejected" },
}

const workStatusBadgeColor = {
  pending: { bg: "#FEF3C7", text: "#92400E", label: "Pending" },
  in_progress: { bg: "#E0E7FF", text: "#3730A3", label: "In Progress" },
  completed: { bg: "#ECFDF5", text: "#065F46", label: "Completed" },
}

const ApplicationDetails = () => {
  const [selectedCandidate] = useState(candidateData)
  const statusInfo =
    statusBadgeColor[selectedCandidate.status as keyof typeof statusBadgeColor] || statusBadgeColor.applied
  const workStatusInfo =
    workStatusBadgeColor[selectedCandidate.workStatus as keyof typeof workStatusBadgeColor] ||
    workStatusBadgeColor.pending

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "N/A"
    const date = new Date(dateString)
    return date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
  }

  const formatExperience = (exp: string) => {
    const expMap: Record<string, string> = {
      apprentice: "Apprentice",
      "1_3_years": "1-3 Years",
      "3_5_years": "3-5 Years",
      "5_years_plus": "5+ Years",
    }
    return expMap[exp] || exp
  }

  const formatJobType = (type: string) => {
    const typeMap: Record<string, string> = {
      full_time: "Full Time",
      part_time: "Part Time",
      freelance: "Freelance",
      contract: "Contract",
    }
    return typeMap[type] || type
  }

  return (
    <div className="bg-[#FFFFFF] flex-1 overflow-auto">
      {/* Header */}
      <header className="bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1E293B]">Application Details</h1>
            <button className="px-6 py-2 rounded-lg font-medium cursor-pointer bg-blue-400 text-white hover:opacity-90 transition-opacity">
              Back to List
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Candidate Profile */}
          <div className="lg:col-span-1">
            <div className="bg-[#FFFFFF] border border-gray-300 rounded-xl p-6">
              {/* Profile Image */}
              <div className="mb-6">
                <Image
                   src={
                    // candidateData.profileImg ||
                    "/images/profile_placeholder.png"
                  }
                  alt="candidate"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/images/profile_placeholder.png";
                  }}
                  width={96}
                  height={96}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              {/* Candidate Name */}
              <h2 className="text-2xl font-bold text-[#1E293B] mb-1">{selectedCandidate.candidateName}</h2>
              <p className="text-sm text-[#64748B] mb-4">{selectedCandidate.category}</p>

              {/* Contact Info */}
              <div className="bg-[#F8FAFC] border border-gray-200 rounded-lg p-4 mb-6">
                <div className="mb-3">
                  <p className="text-xs font-semibold text-[#64748B] mb-1">EMAIL</p>
                  <a
                    href={`mailto:${selectedCandidate.candidateEmail}`}
                    className="text-sm text-[#3B82F6] hover:underline"
                  >
                    {selectedCandidate.candidateEmail}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#64748B] mb-1">LOCATION</p>
                  <p className="text-sm text-[#334155]">{selectedCandidate.address}</p>
                  <p className="text-sm font-medium text-[#334155]">{selectedCandidate.postalCode}</p>
                </div>
              </div>

              {/* Application Status */}
              <div className="space-y-2">
                <div>
                  <p className="text-xs font-semibold text-[#64748B] mb-2">APPLICATION STATUS</p>
                  <div className="inline-block px-3 py-1 rounded-full" style={{ backgroundColor: statusInfo.bg }}>
                    <span style={{ color: statusInfo.text }} className="text-sm font-semibold">
                      {statusInfo.label}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#64748B] mb-2">WORK STATUS</p>
                  <div className="inline-block px-3 py-1 rounded-full" style={{ backgroundColor: workStatusInfo.bg }}>
                    <span style={{ color: workStatusInfo.text }} className="text-sm font-semibold">
                      {workStatusInfo.label}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Job & Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Details Card */}
            <div className="bg-white/60 border border-gray-300 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-[#1E293B] mb-2">{selectedCandidate.title}</h3>
              <p className="text-sm text-[#64748B] mb-6">Job ID: {selectedCandidate.jobId}</p>

              {/* Job Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-100 border border-gray-200 rounded-lg p-4">
                  <p className="text-xs font-semibold text-[#64748B] mb-1">JOB TYPE</p>
                  <p className="font-semibold text-[#1E293B]">{formatJobType(selectedCandidate.jobType)}</p>
                </div>
                <div className="bg-gray-100 border border-gray-200 rounded-lg p-4">
                  <p className="text-xs font-semibold text-[#64748B] mb-1">RATE TYPE</p>
                  <p className="font-semibold text-[#1E293B]">
                    {selectedCandidate.rateType.charAt(0).toUpperCase() + selectedCandidate.rateType.slice(1)}
                  </p>
                </div>
                <div className="bg-gray-100 border border-gray-200 rounded-lg p-4">
                  <p className="text-xs font-semibold text-[#64748B] mb-1">EXPERIENCE REQUIRED</p>
                  <p className="font-semibold text-[#1E293B]">{formatExperience(selectedCandidate.experience)}</p>
                </div>
                <div className="bg-gray-100 border border-gray-200 rounded-lg p-4">
                  <p className="text-xs font-semibold text-[#64748B] mb-1">RATE RANGE</p>
                  <p className="font-semibold text-[#1E293B]">
                    £{selectedCandidate.minRange} - £{selectedCandidate.maxRange}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#FFFFFF] border border-gray-300 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#1E293B] mb-4">About Candidate</h3>
              <div className="text-[#334155] leading-relaxed prose prose-sm max-w-none">
                <div dangerouslySetInnerHTML={{ __html: selectedCandidate.candidateDescription }} />
              </div>
            </div>

            {/* Timeline Card */}
            <div className="bg-[#FFFFFF] border border-gray-300 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#1E293B] mb-4">Job Timeline</h3>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                    <div className="w-0.5 h-12 my-2 bg-blue-300"></div>
                  </div>
                  <div className="pb-4">
                    <p className="text-sm font-semibold text-[#64748B]">Application Deadline</p>
                    <p className="font-medium text-[#1E293B]">{formatDate(selectedCandidate.deadline)}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-green-500"></div>
                    <div className="w-0.5 h-12 my-2 bg-green-300"></div>
                  </div>
                  <div className="pb-4">
                    <p className="text-sm font-semibold text-[#64748B]">Job Start Date</p>
                    <p className="font-medium text-[#1E293B]">{formatDate(selectedCandidate.startDate)}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: selectedCandidate.endDate ? "#8B5CF6" : "#D1D5DB" }}
                    ></div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#64748B]">Job End Date</p>
                    <p className="font-medium text-[#1E293B]">
                      {selectedCandidate.endDate ? formatDate(selectedCandidate.endDate) : "Ongoing"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Applied Date */}
            <div className="bg-[#FFFFFF] border border-gray-300 rounded-xl p-6">
              <p className="text-sm font-semibold text-[#64748B] mb-1">APPLIED ON</p>
              <p className="text-lg font-semibold text-[#1E293B]">{formatDate(selectedCandidate.createdAt)}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 px-6 py-3 rounded-lg font-semibold bg-green-500 text-white cursor-pointer hover:opacity-90 transition-opacity">
                Accept Application
              </button>
              <button className="flex-1 px-6 py-3 rounded-lg font-semibold bg-red-500 text-white hover:opacity-90 transition-opacity">
                Reject Application
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ApplicationDetails;