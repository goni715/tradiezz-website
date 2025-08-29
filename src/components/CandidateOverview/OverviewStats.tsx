"use client";

import { useAppSelector } from "@/redux/hooks/hooks";
import { Bookmark, BriefcaseIcon, Clock8 } from "lucide-react";

const OverviewStats = () => {
  const { overview } = useAppSelector((state) => state.candidate);
    

  return (
    <>
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex items-center justify-between rounded-lg bg-blue-50 p-4">
          <div>
            <div className="text-2xl font-bold text-gray-900">{overview?.applicationCount}</div>
            <div className="text-sm text-gray-500">Applied jobs</div>
          </div>
          <div className="rounded-md bg-white p-3 shadow-sm">
            <BriefcaseIcon className="h-6 w-6 text-blue-600" />
          </div>
        </div>
        <div className="flex items-center justify-between rounded-lg bg-amber-50 p-4">
          <div>
            <div className="text-2xl font-bold text-gray-900">{overview?.favoriteJobCount}</div>
            <div className="text-sm text-gray-500">Favorite jobs</div>
          </div>
          <div className="rounded-md bg-white p-3 shadow-sm">
            <Bookmark className="h-6 w-6 text-amber-500" />
          </div>
        </div>
        <div className="flex items-center justify-between rounded-lg bg-purple-50 p-4">
          <div>
            <div className="text-2xl font-bold text-gray-900">{overview?.jobAlertCount}</div>
            <div className="text-sm text-gray-500">Job Alert</div>
          </div>
          <div className="rounded-md bg-white p-3 shadow-sm">
            <Clock8 className="h-6 w-6 text-purple-500" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OverviewStats;
