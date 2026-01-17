"use client";
import {
  experienceOptions,
  rateOptions,
  typeOptions,
} from "@/data/job.options";
import { useUpdateApplicationMutation } from "@/redux/features/application/applicationApi";
import { IApplication } from "@/types/application.type";
import findLabel from "@/utils/findLabel";
import Image from "next/image";
import { useRouter } from "next/navigation";
import UpdateApplicationStatusModal from "../modal/application/UpdateApplicationStatusModal";
import UpdateWorkStatusModal from "../modal/application/UpdateWorkStatusModal";

type TProps = {
  application: IApplication;
};

const ApplicationDetails = ({ application }: TProps) => {
  const router = useRouter();
  const [accepetedStatus, { isLoading }] = useUpdateApplicationMutation();
  const [rejectedStatus, { isLoading: rejecetedLoading }] = useUpdateApplicationMutation();

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };



  const handleUpdate = (status: 'accepted' | 'rejected') => {
        if(status === "accepted"){
          accepetedStatus({
            id: application._id,
            data: {
              status
            }
          })
        }
        else{
           rejectedStatus({
            id: application._id,
            data: {
              status
            }
          })
        }
  }
 


  return (
    <div className="bg-[#FFFFFF] flex-1 overflow-auto">
      {/* Header */}
      <header className="bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1E293B]">
              Application Details
            </h1>
            <button
              onClick={() => router.back()}
              className="px-6 py-2 rounded-lg font-medium cursor-pointer bg-blue-400 text-white hover:opacity-90 transition-opacity"
            >
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
              <h2 className="text-2xl font-bold text-[#1E293B] mb-1">
                {application.candidateName}
              </h2>
              <p className="text-sm text-[#64748B] mb-4">
                {application.category}
              </p>

              {/* Contact Info */}
              <div className="bg-[#F8FAFC] border border-gray-200 rounded-lg p-4 mb-6">
                <div className="mb-3">
                  <p className="text-xs font-semibold text-[#64748B] mb-1">
                    EMAIL
                  </p>
                  <a
                    href={`mailto:${application.candidateEmail}`}
                    className="text-sm text-[#3B82F6] hover:underline"
                  >
                    {application.candidateEmail}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#64748B] mb-1">
                    LOCATION
                  </p>
                  <p className="text-sm text-[#334155]">
                    {application.address}
                  </p>
                  <p className="text-sm font-medium text-[#334155]">
                    {application.postalCode}
                  </p>
                </div>
              </div>

              {/* Application Status */}
              <div className="space-y-2">
                <div>
                  <p className="text-xs font-semibold text-[#64748B] mb-2">APPLICATION STATUS</p>
                  <UpdateApplicationStatusModal status={application.status} applicationId={application._id} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#64748B] mb-2">WORK STATUS</p>
                   <UpdateWorkStatusModal workStatus={application.workStatus} applicationId={application._id} status={application.status} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Job & Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Details Card */}
            <div className="bg-white/60 border border-gray-300 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-[#1E293B] mb-2">
                {application.title}
              </h3>
              <p className="text-sm text-[#64748B] mb-6">
                Job ID: {application.jobId}
              </p>

              {/* Job Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-100 border border-gray-200 rounded-lg p-4">
                  <p className="text-xs font-semibold text-[#64748B] mb-1">
                    JOB TYPE
                  </p>
                  <p className="font-semibold text-[#1E293B]">
                    {findLabel(typeOptions, application.jobType)}
                  </p>
                </div>
                <div className="bg-gray-100 border border-gray-200 rounded-lg p-4">
                  <p className="text-xs font-semibold text-[#64748B] mb-1">
                    RATE TYPE
                  </p>
                  <p className="font-semibold text-[#1E293B]">
                    {findLabel(rateOptions, application.rateType)}
                  </p>
                </div>
                <div className="bg-gray-100 border border-gray-200 rounded-lg p-4">
                  <p className="text-xs font-semibold text-[#64748B] mb-1">
                    EXPERIENCE REQUIRED
                  </p>
                  <p className="font-semibold text-[#1E293B]">
                    {findLabel(experienceOptions, application.experience)}
                  </p>
                </div>
                <div className="bg-gray-100 border border-gray-200 rounded-lg p-4">
                  <p className="text-xs font-semibold text-[#64748B] mb-1">
                    RATE RANGE
                  </p>
                  <p className="font-semibold text-[#1E293B]">
                    £{application.minRange} - £{application.maxRange}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#FFFFFF] border border-gray-300 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#1E293B] mb-4">
                About Candidate
              </h3>
              <div className="text-[#334155] leading-relaxed prose prose-sm max-w-none">
                <div
                  dangerouslySetInnerHTML={{
                    __html: application.candidateDescription,
                  }}
                />
              </div>
            </div>

            {/* Timeline Card */}
            <div className="bg-[#FFFFFF] border border-gray-300 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#1E293B] mb-4">
                Job Timeline
              </h3>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                    <div className="w-0.5 h-12 my-2 bg-blue-300"></div>
                  </div>
                  <div className="pb-4">
                    <p className="text-sm font-semibold text-[#64748B]">
                      Application Deadline
                    </p>
                    <p className="font-medium text-[#1E293B]">
                      {formatDate(application.deadline)}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-green-500"></div>
                    <div className="w-0.5 h-12 my-2 bg-green-300"></div>
                  </div>
                  <div className="pb-4">
                    <p className="text-sm font-semibold text-[#64748B]">
                      Job Start Date
                    </p>
                    <p className="font-medium text-[#1E293B]">
                      {formatDate(application.startDate)}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{
                        backgroundColor: application.endDate
                          ? "#8B5CF6"
                          : "#D1D5DB",
                      }}
                    ></div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#64748B]">
                      Job End Date
                    </p>
                    <p className="font-medium text-[#1E293B]">
                      {application.endDate
                        ? formatDate(application.endDate)
                        : "Ongoing"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Applied Date */}
            <div className="bg-[#FFFFFF] border border-gray-300 rounded-xl p-6">
              <p className="text-sm font-semibold text-[#64748B] mb-1">
                APPLIED ON
              </p>
              <p className="text-lg font-semibold text-[#1E293B]">
                {formatDate(application.createdAt)}
              </p>
            </div>

            {/* Action Buttons */}
            {application.status === "applied" && (
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={()=> handleUpdate("accepted")} className="flex-1 px-6 py-2 rounded-lg font-semibold bg-green-500 text-white cursor-pointer hover:opacity-90 transition-opacity">
                 {isLoading ? "Processing..." : "Accept Application"}
                </button>
                <button onClick={()=> handleUpdate("rejected")} className="flex-1 px-6 py-2 rounded-lg font-semibold bg-red-500 text-white cursor-pointer hover:opacity-90 transition-opacity">
                  {rejecetedLoading ? "Processing..." : "Reject Application"}
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ApplicationDetails;
