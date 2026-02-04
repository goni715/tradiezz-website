"use client";

import React from "react";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import {
  LayoutDashboard,
  Podcast,
  CirclePlus,
  BriefcaseBusiness,
  Dock,
  MessageSquareMore,
  Settings,
  Home,
  Briefcase,
  Users,
  FileText,
  Mail,
  LogOut,
  X,
  BookmarkIcon,
} from "lucide-react";

type UserInfo = {
  userId?: string;
  fullName?: string;
  role?: "employer" | "candidate";
  profileImg?: string;
};

type TProps = {
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  userInfo?: UserInfo;
  onLogout?: () => void;
};

const MobileMenu = ({ setIsMenuOpen, userInfo, onLogout }: TProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => pathname === path;

  const MenuLink = ({
    path,
    label,
    icon: Icon,
  }: {
    path: string;
    label: string;
    icon: React.ReactNode;
  }) => (
    <button
      onClick={() => handleNavigate(path)}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
        isActive(path)
          ? "bg-primary text-white font-medium"
          : "text-foreground hover:bg-muted"
      }`}
    >
      <div className="shrink-0 w-5 h-5 flex items-center justify-center">
        {Icon}
      </div>
      <span className="flex-1 text-left text-sm">{label}</span>
    </button>
  );

  return (
    <div className="md:hidden fixed inset-0 top-0 z-40 bg-background border-b border-border">
      <div className="h-full overflow-y-auto flex flex-col">
        {/* Header Section */}
        {/* Header Section */}
        <div className="sticky top-0 bg-background border-b border-border p-4">
          <div className="flex items-center justify-between">
            {userInfo?.userId ? (
              <div
                onClick={() => handleNavigate("/dashboard/candidate/profile")}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors cursor-pointer"
              >
                <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-border">
                  <Image
                    src={
                      userInfo?.profileImg || "/images/profile_placeholder.png"
                    }
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/images/profile_placeholder.png";
                    }}
                    alt="user"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">
                    {userInfo?.fullName}
                  </p>
                  <p className="text-xs text-muted-foreground capitalize">
                    {userInfo?.role}
                  </p>
                </div>
              </div>
            ) : (
              <div
                onClick={() => handleNavigate("/dashboard/candidate/profile")}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors cursor-pointer"
              >
                <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border border-border">
                  <Image
                    src="/images/logo.png"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/images/profile_placeholder.png";
                    }}
                    alt="user"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-md hover:bg-muted transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* Main Menu */}
          <div className="space-y-1">
            <h3 className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Main
            </h3>
            <MenuLink
              path="/"
              label="Home"
              icon={<Home className="w-5 h-5" />}
            />
            <MenuLink
              path="/find-work"
              label="Find Work"
              icon={<Briefcase className="w-5 h-5" />}
            />
            {userInfo?.role === "employer" && (
              <MenuLink
                path="/find-candidates"
                label="Find-Skilled-People"
                icon={<Users className="w-5 h-5" />}
              />
            )}
            <MenuLink
              path="/blogs"
              label="Blogs"
              icon={<FileText className="w-5 h-5" />}
            />
            <MenuLink
              path="/contact"
              label="Contact"
              icon={<Mail className="w-5 h-5" />}
            />
          </div>

          {/* Dashboard Section */}
          {userInfo?.userId && (
            <div className="space-y-1">
              <h3 className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Dashboard
              </h3>
              {userInfo?.role === "employer" ? (
                <>
                  <MenuLink
                    path="/dashboard/employer/overview"
                    label="Overview"
                    icon={<LayoutDashboard className="w-5 h-5" />}
                  />
                  <MenuLink
                    path="/dashboard/employer/subscription-plans"
                    label="Plans"
                    icon={<span className="text-lg">📋</span>}
                  />
                  <MenuLink
                    path="/dashboard/employer/my-subscriptions"
                    label="Subscriptions"
                    icon={<Podcast className="w-5 h-5" />}
                  />
                  <MenuLink
                    path="/dashboard/employer/post-job"
                    label="Post Job"
                    icon={<CirclePlus className="w-5 h-5" />}
                  />
                  <MenuLink
                    path="/dashboard/employer/my-jobs"
                    label="My Jobs"
                    icon={<BriefcaseBusiness className="w-5 h-5" />}
                  />
                  <MenuLink
                    path="/dashboard/employer/applications"
                    label="Applications"
                    icon={<Dock className="w-5 h-5" />}
                  />
                  <MenuLink
                    path="/dashboard/employer/messages"
                    label="Messages"
                    icon={<MessageSquareMore className="w-5 h-5" />}
                  />
                  <MenuLink
                    path="/dashboard/employer/settings"
                    label="Settings"
                    icon={<Settings className="w-5 h-5" />}
                  />
                </>
              ) : (
                <>
                  <MenuLink
                    path="/dashboard/candidate/overview"
                    label="Overview"
                    icon={<LayoutDashboard className="w-5 h-5" />}
                  />
                  <MenuLink
                    path="/dashboard/candidate/applied-jobs"
                    label="Applied Jobs"
                    icon={<BriefcaseBusiness className="w-5 h-5" />}
                  />
                  <MenuLink
                    path="/dashboard/candidate/favourite-jobs"
                    label="Favourite Jobs"
                    icon={<BookmarkIcon className="w-5 h-5" />}
                  />
                  <MenuLink
                    path="/dashboard/candidate/messages"
                    label="Messages"
                    icon={<MessageSquareMore className="w-5 h-5" />}
                  />
                </>
              )}
            </div>
          )}
        </div>

        {/* Footer Section */}
        <div className="sticky bottom-0 border-t border-border p-4 space-y-2 bg-background">
          {userInfo?.userId ? (
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors font-medium text-sm"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          ) : (
            <button
              onClick={() => handleNavigate("/login")}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg
             border border-primary/80 text-primary
             hover:bg-primary/10 transition-colors font-medium text-sm"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
