"use client";

import { useState } from "react";
import { mockNotifications } from "@/data/notification.data";
import Pagination from "@/components/notification/Pagination";
import NotificationsList from "@/components/notification/NotificationsList";
import NotificationsHeader from "@/components/notification/NotificationHeader";

const NotificationPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [notifications, setNotifications] = useState(mockNotifications);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(notifications.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentNotifications = notifications.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of list on page change for better UX
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleAction = (id: string, action: "accept" | "reject") => {
    if (action === "accept") {
      // Here we would typically make an API call to accept
      console.log(`Accepted notification ${id}`);
    } else {
      // Remove notification from the list
      setNotifications(
        notifications.filter((notification) => notification.id !== id)
      );
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <NotificationsHeader count={notifications.length} />

        <div className="mt-8 bg-white rounded-lg shadow-sm overflow-hidden">
          <NotificationsList
            notifications={currentNotifications}
            onAction={handleAction}
          />

          {notifications.length > 0 ? (
            <div className="px-4 py-3 bg-white border-t border-gray-200">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                totalItems={notifications.length}
                itemsPerPage={itemsPerPage}
                onPageChange={handlePageChange}
              />
            </div>
          ) : (
            <div className="px-6 py-12 text-center">
              <p className="text-gray-500">
                No notifications at this time.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default NotificationPage;
