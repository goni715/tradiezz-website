import { typeOptions } from '@/data/job.options';
import { IMyJob } from '@/types/job.type';
import findLabel from '@/utils/findLabel';
import getJobTypeColor from '@/utils/getJobTypeColor';
import getStatusBadge from '@/utils/getStatusBadge';
import { Edit, Eye, Trash2 } from 'lucide-react';
import React from 'react';
import {
    CheckCircle,
    XCircle,
    Clock
} from "lucide-react";

type TProps = {
    job: IMyJob;
}

const MyJobItem = ({ job }: TProps) => {

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "visible":
                return <CheckCircle className="w-5 h-5 text-green-500" />;
            case "hidden":
                return <XCircle className="w-5 h-5 text-red-500" />;
            case "pending":
                return <Clock className="w-5 h-5 text-yellow-500" />;
            default:
                return null;
        }
    };


  return (
    <>
       <div
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
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getJobTypeColor(
                    job.jobType
                  )}`}
                >
                  {findLabel(typeOptions, job.jobType)}
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
    </>
  )
}

export default MyJobItem;
