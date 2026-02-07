import type { ISingleJob } from "@/types/job.type";
import formatDate from "@/utils/formatDate";
import formatExperience from "@/utils/formatExperience";
import {
  MapPin,
  Calendar,
  Briefcase,
  CheckCircle2,
  Clock,
  Eye,
} from "lucide-react";
import VisibleStatusButton from "../badge/VisibleStatusButton";
import getJobTypeColor from "@/utils/getJobTypeColor";
import findLabel from "@/utils/findLabel";
import { FaPoundSign } from "react-icons/fa";
import { typeOptions } from "@/data/job.options";
import ApplyJobModal from "../modal/application/ApplyJobModal";
import { WarningToast } from "@/helper/ValidationHelper";
import useUserInfo from "@/hooks/useUserInfo";
import { useRouter } from "next/navigation";

type TProps = {
  job: ISingleJob;
};

const JobDetails = ({ job }: TProps) => {
  const isDeadlineSoon =
    new Date(job.deadline) < new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);
  const userInfo = useUserInfo();
  const router = useRouter();

  return (
    <div className="min-h-full bg-gray-50 rounded-md">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                {job.title}
              </h1>
              <p className="text-muted-foreground text-lg">{job.category}</p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`px-3 py-2 rounded-full text-xs font-medium ${getJobTypeColor(
                  job.jobType,
                )}`}
              >
                {findLabel(typeOptions, job.jobType)}
              </span>

              {/* View Employer Button */}
              <button
                className="flex items-center gap-2 px-3 py-2 text-xs font-medium cursor-pointer rounded-full border border-gray-400 hover:bg-muted transition"
                onClick={() => {
                  if (!userInfo) {
                    WarningToast("Please log in to view employer details.");
                    return;
                  }
                  if (userInfo.role !== "candidate") {
                    WarningToast(
                      "Only job seekers can view employer information.",
                    );
                    return;
                  }
                  router.push(`/employer-details/${job.userId}`);
                }}
              >
                <Eye size={14} />
                <span className="inline">View Employer</span>
              </button>
              <ApplyJobModal jobId={job._id} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* Location */}
          <div className="p-4">
            <div className="flex gap-3 items-start">
              <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="font-semibold text-foreground">{job.address}</p>
                <p className="text-xs text-muted-foreground">
                  {job.postalCode}
                </p>
              </div>
            </div>
          </div>

          {/* Budget */}
          <div className="p-4">
            <div className="flex gap-3 items-start">
              <FaPoundSign className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  Salary Range
                </p>
                <p className="font-semibold text-foreground">
                  £{job.minRange} - £{job.maxRange}
                </p>
                <p className="text-xs text-muted-foreground capitalize">
                  {job.rateType}
                </p>
              </div>
            </div>
          </div>

          {/* Duration */}
          <div className="p-4">
            <div className="flex gap-3 items-start">
              <Calendar className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground mb-1">Duration</p>
                <p className="font-semibold text-foreground text-sm">
                  {formatDate(job.startDate)} - {formatDate(job.endDate)}
                </p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="p-4">
            <div className="flex gap-3 items-start">
              <Briefcase className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground mb-1">Experience</p>
                <p className="font-semibold text-foreground">
                  {formatExperience(job.experience)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Required Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {job.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 p-2 bg-gray-200 rounded-lg"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-foreground font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Benefits
              </h2>
              <p className="text-muted-foreground mb-4">{job.benefits}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div
              className={`p-6 ${isDeadlineSoon ? "border-destructive" : ""}`}
            >
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">
                  Application Deadline
                </h3>
              </div>
              <p className="text-lg font-bold text-foreground mb-2">
                {formatDate(job.deadline)}
              </p>
            </div>

            <div className="p-6">
              <h3 className="font-semibold text-foreground mb-4">
                Job Details
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-muted-foreground mb-1">Job ID</p>
                  <p className="font-mono text-xs text-foreground truncate">
                    {job._id}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Posted On</p>
                  <p className="text-foreground">Nov 24, 2025</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Status</p>
                  <VisibleStatusButton status={job.status} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
