/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { Notification } from "@/data/notification.data";

interface NotificationItemProps {
  notification: Notification;
  onAction: (id: string, action: "accept" | "reject") => void;
  view: "card" | "table";
}

export default function NotificationItem({ notification, onAction, view }: NotificationItemProps) {
  const [isHovering, setIsHovering] = useState(false);

//   const date = new Date(notification.timestamp);
// const formattedDate = new Intl.DateTimeFormat("en-GB", {
//   dateStyle: "medium",
//   timeStyle: "short",
//   timeZone: "UTC", // or "America/New_York", etc.
// }).format(date);

  
  const handleAccept = () => {
    onAction(notification.id, "accept");
  };
  
  const handleReject = () => {
    onAction(notification.id, "reject");
  };
  
  const ActionButtons = () => (
    <div className="flex space-x-2">
      <button
        onClick={handleAccept}
        className="p-1.5 rounded-full cursor-pointer bg-green-100 text-green-600 hover:bg-green-200 focus:outline-none hover:border-green-800 transition-all duration-200"
        aria-label="Accept"
      >
        <Check className="h-5 w-5" />
      </button>
      <button
        onClick={handleReject}
        className="p-1.5 rounded-full cursor-pointer bg-red-100 text-red-600 hover:bg-red-200 focus:outline-none transition-all duration-200"
        aria-label="Reject"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );

  if (view === "table") {
    return (
      <tr 
        className={`${notification.read ? "" : "bg-blue-50"} hover:bg-gray-50 transition-colors duration-150`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="text-sm font-medium text-gray-900">
              {notification.name}
            </div>
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="text-sm text-gray-900">
            {notification.title}
          </div>
          <div className="text-xs text-gray-500 mt-1">
            {new Date(notification.timestamp).toLocaleDateString()} · {new Date(notification.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <ActionButtons />
        </td>
      </tr>
    );
  }
  
  return (
    <li 
      className={`px-4 py-4 ${notification.read ? "" : "bg-blue-50"}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <div>
          <p className="font-medium text-gray-900">{notification.name}</p>
          <p className="mt-1 text-sm text-gray-600">{notification.title}</p>
          <p className="mt-1 text-xs text-gray-500">
            {new Date(notification.timestamp).toLocaleDateString()} · {new Date(notification.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <ActionButtons />
        </div>
      </div>
    </li>
  );
}