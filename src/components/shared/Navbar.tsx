"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";
import useUserInfo from "@/hooks/useUserInfo";
import DashboardButton from "./DashboardButton";
import { logout } from "@/helper/SessionHelper";
import UserImg from "./UserImg";

const Navbar = () => {
  const userInfo = useUserInfo();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();


  return (
    <nav className="sticky top-0 h-[88px] z-50 w-full bg-white text-primary shadow-md">
      <div className="mx-auto h-full flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.png" alt="logo" width={80} height={80} className="w-20 h-20"/>
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden space-x-6 md:flex">
          <Link
            href="/"
            className={`hover:text-brand-color ${
              pathname === "/" ? "text-brand-color" : "text-primary"
            }`}
          >
            Home
          </Link>
          <Link
            href="/find-work"
            className={`hover:text-brand-color ${
              pathname === "/find-work" ? "text-brand-color" : "text-primary"
            }`}
          >
            Find Work
          </Link>
           {userInfo?.userId && <DashboardButton />}
          <Link
            href="/blogs"
            className={`hover:text-brand-color ${
              pathname === "/blogs" ? "text-brand-color" : "text-primary"
            }`}
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            className={`hover:text-brand-color ${
              pathname === "/contact" ? "text-brand-color" : "text-primary"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden items-center space-x-4 md:flex">
          {userInfo?.userId ? (
            <>
              <button
                onClick={() => logout()}
                className="rounded-md border cursor-pointer border-white px-4 py-1.5 text-sm hover:bg-white/10"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-md border border-white px-4 py-1.5 text-primary hover:text-brand-color"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="rounded-md border border-white px-4 py-1.5 text-primary hover:text-brand-color"
              >
                Sign Up
              </Link>
            </>
          )}
          {/* <button
            onClick={() => router.push("/dashboard/candidate/messages")}
            className="relative rounded-full p-1 cursor-pointer hover:bg-white/10"
          >
            <MessageCircleMore size={20} />
            <span className="absolute -top-1 -right-1 min-w-[16px] h-[16px] px-[4px] text-[10px] leading-tight flex items-center justify-center rounded-full bg-red-500 text-white">
              2
            </span>
          </button>
          <button
            onClick={() => router.push("/notifications")}
            className="relative rounded-full p-1 cursor-pointer hover:bg-white/10"
          >
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 min-w-[16px] h-[16px] px-[4px] text-[10px] leading-tight flex items-center justify-center rounded-full bg-red-500 text-white">
              2
            </span>
          </button> */}

          {/* <div onClick={() => router.push("/dashboard/candidate/settings")} className="flex items-center gap-2 cursor-pointer">
            <div className="h-8 w-8 rounded-full">
              <Image
                src="/images/avatar.png"
                alt="user"
                width={500}
                height={600}
              />
            </div>
            <span className="text-sm">Andrew Ainsley</span>
          </div> */}
          {userInfo && userInfo.userId && <UserImg/>}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-md p-2 hover:bg-white/10 cursor-pointer"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <MobileMenu setIsMenuOpen={setIsMenuOpen} />}
    </nav>
  );
}

export default Navbar;