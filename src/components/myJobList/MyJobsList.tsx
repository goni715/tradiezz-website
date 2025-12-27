"use client";

import { useState, useMemo } from "react";
import {
  Edit,
  Trash2,
  Eye,
  CheckCircle,
  XCircle,
  Clock
} from "lucide-react";

interface Job {
  id: number;
  title: string;
  type: string;
  status: "active" | "expired";
  applications: number;
}

const mockJobs: Job[] = [
  {
    id: 1,
    title: "Water Supply",
    type: "Part Time",
    status: "active",
    applications: 798,
  },
  {
    id: 2,
    title: "Water Supply",
    type: "Short Time",
    status: "active",
    applications: 185,
  },
  {
    id: 3,
    title: "Water Supply",
    type: "Contract Base",
    status: "active",
    applications: 583,
  },
  {
    id: 4,
    title: "Water Supply",
    type: "Hourly",
    status: "expired",
    applications: 740,
  },
  {
    id: 5,
    title: "Water Supply",
    type: "Part Time",
    status: "active",
    applications: 556,
  },
  {
    id: 6,
    title: "Water Supply",
    type: "Contract Base",
    status: "expired",
    applications: 426,
  },
  {
    id: 7,
    title: "Water Supply",
    type: "Temporary",
    status: "active",
    applications: 922,
  },
  {
    id: 8,
    title: "Water Supply",
    type: "Hourly",
    status: "active",
    applications: 994,
  },
  {
    id: 9,
    title: "Water Supply",
    type: "Temporary",
    status: "expired",
    applications: 196,
  },
];

const MyJobsList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

 

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "expired":
        return <XCircle className="w-5 h-5 text-red-500" />;
      case "pending":
        return <Clock className="w-5 h-5 text-yellow-500" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    const baseClasses =
      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";
    switch (status) {
      case "active":
        return `${baseClasses} bg-green-100 text-green-800`;
      case "expired":
        return `${baseClasses} bg-red-100 text-red-800`;
      case "pending":
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      default:
        return baseClasses;
    }
  };

  const getTypeColor = (type: string) => {
    const colors = {
      "Short Time": "bg-blue-100 text-blue-800",
      "Part Time": "bg-purple-100 text-purple-800",
      Hourly: "bg-orange-100 text-orange-800",
      "Contract Base": "bg-indigo-100 text-indigo-800",
      Temporary: "bg-pink-100 text-pink-800",
    };
    return colors[type as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <>


        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 overflow-hidden"
            >
              {/* Card Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 truncate">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-1">
                    {getStatusIcon(job.status)}
                  </div>
                </div>

                {/* Job Type Badge */}
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeColor(
                    job.type
                  )}`}
                >
                  {job.type}
                </span>
              </div>

              {/* Card Body */}
              <div className="px-6 pb-4">
                {/* Status */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-600">Status</span>
                  <span className={getStatusBadge(job.status)}>
                    {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                  </span>
                </div>

                {/* Applications */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-600">Applications</span>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4 text-gray-400 cursor-pointer" />
                    <span className="font-semibold text-gray-900">
                      {job.applications}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <button className="text-blue-600 cursor-pointer hover:text-blue-700 text-sm font-medium flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    View Details
                  </button>

                  <div className="flex items-center gap-2">
                    <button className="p-2 text-gray-400 hover:text-blue-600 cursor-pointer hover:bg-blue-50 rounded-lg transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-600 cursor-pointer hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {/* {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No jobs found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )} */}

    </>
  );
};

export default MyJobsList;
