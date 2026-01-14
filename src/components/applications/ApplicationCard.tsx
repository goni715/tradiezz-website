"use client";

import { IApplication } from "@/types/application.type";
import {
  Mail,
  FileText,
  Calendar,
} from "lucide-react";
import UpdateApplicationStatusModal from "../modal/application/UpdateApplicationStatusModal";
import UpdateWorkStatusModal from "../modal/application/UpdateWorkStatusModal";



type TProps = {
  application: IApplication;
};

const ApplicationCard = ({ application }: TProps) => {
  const {
    _id,
    title,
    category,
    candidateName,
    candidateEmail,
    candidateCV,
    workStatus,
    createdAt,
    status
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
        <UpdateApplicationStatusModal status={status} applicationId={_id}/>
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
          <span className="text-sm text-gray-600">
            Work Status:{" "}
          </span>
          <UpdateWorkStatusModal workStatus={workStatus} applicationId={_id}/>
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
