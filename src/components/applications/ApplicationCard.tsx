"use client";

import { IApplication } from "@/types/application.type";
import {
  Mail,
  FileText,
  Calendar,
  CheckCircle2,
  Clock,
  Loader,
  PauseCircle,
} from "lucide-react";
import { FiEdit } from "react-icons/fi";

const statusColors = {
  applied: {
    bg: "bg-blue-50",
    text: "text-blue-700",
    border: "border-blue-200",
  },
  shortlisted: {
    bg: "bg-indigo-50",
    text: "text-indigo-700",
    border: "border-indigo-200",
  },
  accepted: {
    bg: "bg-green-50",
    text: "text-green-700",
    border: "border-green-200",
  },
  rejected: {
    bg: "bg-red-50",
    text: "text-red-700",
    border: "border-red-200",
  },
  cancelled: {
    bg: "bg-gray-50",
    text: "text-gray-600",
    border: "border-gray-200",
  },
};

export const workStatusColors: Record<
  "pending" | "running" | "stopped" | "completed",
  {
    bg: string;
    text: string;
    border: string;
  }
> = {
  pending: {
    bg: "bg-yellow-50",
    text: "text-yellow-700",
    border: "border-yellow-200",
  },
  running: {
    bg: "bg-blue-50",
    text: "text-blue-700",
    border: "border-blue-200",
  },
  stopped: {
    bg: "bg-red-50",
    text: "text-red-700",
    border: "border-red-200",
  },
  completed: {
    bg: "bg-green-50",
    text: "text-green-700",
    border: "border-green-200",
  },
};


const workStatusIcons = {
  pending: <Clock className="w-4 h-4 text-yellow-500" />,
  running: <Loader className="w-4 h-4 animate-spin text-blue-500" />,
  stopped: <PauseCircle className="w-4 h-4 text-red-500" />,
  completed: <CheckCircle2 className="w-4 h-4 text-green-500" />,
};

type TProps = {
  application: IApplication;
};

const ApplicationCard = ({ application }: TProps) => {
  const {
    title,
    category,
    candidateName,
    candidateEmail,
    candidateCV,
    status,
    workStatus,
    createdAt,
  } = application;

  const handleViewCV = () => {
    window.open(
      candidateCV,
      "_blank"
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-6 border-b border-gray-100">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {candidateName}
          </h3>
          <p className="text-sm text-gray-600 mb-3">{title}</p>
          <div className="flex items-center gap-2">
            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
              {category}
            </span>
          </div>
        </div>

        {/* Status Badge */}
        <div
          className={`px-3 py-2 flex items-center gap-2 cursor-pointer rounded-full text-sm font-medium border ${statusColors[status].bg} ${statusColors[status].text} ${statusColors[status].border}`}
        >
          <span className="capitalize">{status}</span>
          <FiEdit  className="w-4 h-4 opacity-60 hover:opacity-100" />
        </div>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-gray-400 shrink-0" />
          <div className="min-w-0">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
              Email
            </p>
            <p className="text-sm text-gray-700 truncate">{candidateEmail}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Calendar className="w-5 h-5 text-gray-400 shrink-0" />
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
              Applied
            </p>
            <p className="text-sm text-gray-700">{formatDate(createdAt)}</p>
          </div>
        </div>
      </div>

      {/* Footer Section with Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6">
        <div className="flex items-center gap-2">
          {/* {workStatusIcons[workStatus]} */}
          <span className="text-sm text-gray-600">
            Work Status:{" "}
            {/* <span className="font-medium text-gray-900 capitalize">
              {workStatus}
            </span> */}
          </span>
           <button
              // onClick={() => setShowWorkStatusDropdown(!showWorkStatusDropdown)}
              className={`flex items-center gap-2 cursor-pointer px-3 py-2 rounded-full text-sm font-medium border transition-all ${
                workStatusColors[workStatus].bg
              } ${workStatusColors[workStatus].text} ${workStatusColors[workStatus].border} hover:shadow-md`}
            >
              {workStatusIcons[workStatus]}
              <span>{workStatus.charAt(0).toUpperCase() + workStatus.slice(1)}</span>
              <FiEdit className="w-4 h-4 opacity-60 hover:opacity-100" />
            </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <button
            onClick={handleViewCV}
            className="flex items-center justify-center gap-2 px-2 py-2 cursor-pointer bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 text-sm"
          >
            <FileText className="w-4 h-4" />
            <span>View CV</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationCard;
