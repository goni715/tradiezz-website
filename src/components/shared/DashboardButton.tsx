"use client";

import useUserInfo from "@/hooks/useUserInfo";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardButton = () => {
  const pathname = usePathname();
  const userInfo = useUserInfo();
  const pathArray = pathname.split('/');
  const isDashboard = pathArray.includes("dashboard");

  if (userInfo && userInfo?.role === "employer") {
    return (
      <>
        <Link
          href="/find-candidates"
          className={`hover:text-brand-color ${pathname === "/find-candidates" ? "text-brand-color" : "text-primary"
            }`}
        >
           Find-Skilled-People
        </Link>
        <Link
          href="/dashboard/employer/overview"
          className={`hover:text-brand-color ${isDashboard ? "text-brand-color" : "text-primary"}`}
        >
          Dashboard
        </Link>
      </>
    );
  }

  if (userInfo && userInfo?.role === "candidate") {
    return (
      <Link
        href="/dashboard/candidate/overview"
        className={`hover:text-secondary ${
          pathname === "/dashboard/candidate/overview"
            ? "text-secondary"
            : "text-white"
        }`}
      >
        Dashboard
      </Link>
    );
  }
};

export default DashboardButton;
