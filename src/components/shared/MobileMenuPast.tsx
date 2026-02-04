"use client";

import { logout } from "@/helper/SessionHelper";
import useUserInfo from "@/hooks/useUserInfo";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

type TProps = {
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const MobileMenu = ({ setIsMenuOpen }: TProps) => {
  const userInfo = useUserInfo();
  const pathname = usePathname();
  const router = useRouter();
  const handleNavigate = (path: string) => {
    router.push(path);
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="md:hidden bg-white shadow">
        <div className="space-y-1 px-4 pb-3 pt-2">
          <div
            onClick={() => handleNavigate("/")}
            className={`block rounded-md px-3 py-2 hover:bg-white/10 cursor-pointer ${
              pathname === "/" ? "text-brand-color" : "text-primary"
            }`}
          >
            Home
          </div>
          <div
            onClick={() => handleNavigate("/find-work")}
            className={`block rounded-md px-3 py-2 hover:bg-white/10 cursor-pointer ${
              pathname === "/find-work" ? "text-brand-color" : "text-primary"
            }`}
          >
            Find Work
          </div>
          {userInfo && userInfo?.role === "employer" ? (
            <>
              <div
                onClick={() => handleNavigate("/find-candidates")}
                className={`block rounded-md px-3 py-2 hover:bg-white/10 cursor-pointer ${
                  pathname === "/find-candidates"
                    ? "text-brand-color"
                    : "text-primary"
                }`}
              >
                Find-Skilled-People
              </div>
              <div
                onClick={() => handleNavigate("/dashboard/employer/overview")}
                className={`block rounded-md px-3 py-2 hover:bg-white/10 cursor-pointer ${
                  pathname === "/dashboard/employer/overview"
                    ? "text-brand-color"
                    : "text-primary"
                }`}
              >
                Dashboard
              </div>
            </>
          ) : (
            <>
              <div
                onClick={() => handleNavigate("/dashboard/candidate/overview")}
                className={`block rounded-md px-3 py-2 hover:bg-white/10 cursor-pointer ${
                  pathname === "/dashboard/candidate/overview"
                    ? "text-brand-color"
                    : "text-primary"
                }`}
              >
                Dashboard
              </div>
            </>
          )}
          <div
            onClick={() => handleNavigate("/blogs")}
            className={`block rounded-md px-3 py-2 hover:bg-white/10 cursor-pointer ${
              pathname === "/blogs" ? "text-brand-color" : "text-primary"
            }`}
          >
            Blogs
          </div>
          <div
            onClick={() => handleNavigate("/contact")}
            className={`block rounded-md px-3 py-2 hover:bg-white/10 cursor-pointer ${
              pathname === "/contact" ? "text-brand-color" : "text-primary"
            }`}
          >
            Contact
          </div>
          <div className="my-3 border-t border-white/20 pt-3">
            {userInfo?.userId ? (
              <>
                <div
                  onClick={() => logout()}
                  className="mt-2 w-full block rounded-md cursor-pointer border border-gray-300 px-3 py-2 text-center text-gray-600"
                >
                  Logout
                </div>
                <div className="mt-4 flex items-center justify-between gap-2 px-3">
                  <div
                    onClick={() => handleNavigate("/")}
                    className="flex items-center gap-2"
                  >
                    <div className="h-8 w-8 rounded-full">
                      <Image
                        src={
                          userInfo?.profileImg ||
                          "/images/profile_placeholder.png"
                        }
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src =
                            "/images/profile_placeholder.png";
                        }}
                        alt="user"
                        width={500}
                        height={600}
                        className="rounded-md"
                      />
                    </div>
                    <span className="text-sm">{userInfo?.fullName}</span>
                  </div>
                </div>
              </>
            ) : (
              <div
                onClick={() => handleNavigate("/login")}
                className="mt-2 cursor-pointer block rounded-md bg-primary px-3 py-2 text-center text-white"
              >
                Sign In
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
