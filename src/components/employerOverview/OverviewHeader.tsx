"use client";

import { useAppSelector } from "@/redux/hooks/hooks";

const OverviewHeader = () => {
  const { user } = useAppSelector((state) => state.user);

  return (
    <>
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-gray-900">
           Hello, {user ? user?.name : ""}
        </h1>
        <p className="text-sm text-gray-500">
          Here is your daily activities
        </p>
      </div>
    </>
  );
};

export default OverviewHeader;
