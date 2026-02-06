"use client";

import {
  candidateExperienceOptions,
  employmentTypeOptions,
  workRateOptions,
  workTypeOptions,
} from "@/data/candidate.options";
import { ISingleCandidate } from "@/types/candidate.type";
import findLabel from "@/utils/findLabel";
import Image from "next/image";
import SendMessageModal from "../modal/message/SendMessageModal";

type TProps = {
  candidateData: ISingleCandidate;
};

const CandidateDetails = ({ candidateData }: TProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-slate-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            {/* Profile Image */}
            <div className="shrink-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg bg-gray-100 overflow-hidden border-2 border-blue-100">
                <Image
                  src={
                    candidateData.profileImg ||
                    "/images/profile_placeholder.png"
                  }
                  alt="candidate"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/images/profile_placeholder.png";
                  }}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 w-full">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-1">
                    {candidateData?.fullName}
                  </h1>

                  <p className="text-base sm:text-lg text-gray-600 mb-3">
                    {candidateData.subCategory} in {candidateData.category}
                  </p>

                  <div className="flex gap-4 text-sm">
                    <span className="text-gray-600">
                      <span className="font-semibold text-gray-900">
                        {candidateData.ratings}
                      </span>{" "}
                      Rating
                    </span>

                    <span className="text-gray-600">
                      <span className="font-semibold text-gray-900">
                        {candidateData.totalReview}
                      </span>{" "}
                      Reviews
                    </span>
                  </div>
                </div>

                {/* Message Button */}
               <SendMessageModal partnerId={candidateData.userId} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                About
              </h2>
              <div
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: candidateData.description }}
              />
            </section>

            {/* Skills Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                Skills & Expertise
              </h2>
              <div className="flex flex-wrap gap-2">
                {candidateData.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
                  >
                    {skill?.charAt(0).toUpperCase() + skill?.slice(1)}
                  </span>
                ))}
              </div>
            </section>

            {/* Experience & Specialization */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                Experience & Specialization
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-xs text-gray-600 uppercase font-semibold mb-1">
                    Experience Level
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    {findLabel(
                      candidateExperienceOptions,
                      candidateData?.experience,
                    )}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-xs text-gray-600 uppercase font-semibold mb-1">
                    Work Type
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    {findLabel(workTypeOptions, candidateData?.workType)}
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Contact & Details */}
          <aside className="space-y-6">
            {/* Contact Information */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Contact Information
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-600 uppercase font-semibold mb-1">
                    Email
                  </p>
                  <a
                    href={`mailto:${candidateData.email}`}
                    className="text-blue-500 hover:underline font-medium"
                  >
                    {candidateData.email}
                  </a>
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase font-semibold mb-1">
                    Phone
                  </p>
                  <a
                    href={`tel:${candidateData.phone}`}
                    className="text-blue-500 hover:underline font-medium"
                  >
                    {candidateData.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Location</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-600 uppercase font-semibold mb-1">
                    Address
                  </p>
                  <p className="text-gray-700">{candidateData.address}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase font-semibold mb-1">
                    City
                  </p>
                  <p className="text-gray-700">{candidateData.city}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase font-semibold mb-1">
                    Postal Code
                  </p>
                  <p className="text-gray-700">{candidateData.postalCode}</p>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Availability
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-600 uppercase font-semibold mb-1">
                    Available From
                  </p>
                  <p className="text-gray-900 font-medium">
                    {formatDate(candidateData.availableDate)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase font-semibold mb-1">
                    Employment Type
                  </p>
                  <p className="text-gray-900 font-medium">
                    {findLabel(
                      employmentTypeOptions,
                      candidateData?.employmentType,
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase font-semibold mb-1">
                    Work Rate
                  </p>
                  <p className="text-gray-900 font-medium">
                    {findLabel(workRateOptions, candidateData?.workRate)}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            {/* <div className="flex gap-3">
              <button className="flex-1 px-4 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                Hire
              </button>
              <button className="flex-1 px-4 py-3 border border-blue-500 text-blue-500 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Message
              </button>
            </div> */}
          </aside>
        </div>
      </div>
    </main>
  );
};

export default CandidateDetails;
