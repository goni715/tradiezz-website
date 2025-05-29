"use client";

import { BellIcon } from "lucide-react";

interface NotificationsHeaderProps {
  count: number;
}

export default function NotificationsHeader({ count }: NotificationsHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-gray-900">My Notifications</h1>
        {count > 0 && (
          <div className="ml-3 flex items-center">
            <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 transition-all duration-200">
              {count}
            </span>
          </div>
        )}
      </div>
      
      <div className="mt-4 sm:mt-0 flex space-x-2">
        <button 
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer transition-all duration-200"
        >
          <BellIcon className="h-4 w-4 mr-2" />
          Mark all as read
        </button>
      </div>
    </div>
  );
}