"use client";

import { useState } from "react";
import Link from "next/link";
import { Bell, Menu, MessageCircleMore, X } from "lucide-react";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="sticky top-0 h-[88px] z-50 w-full bg-primary text-white shadow-md">
      <div className="mx-auto h-full flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.png" alt="logo" width={120} height={120} />
        </Link>
        {/* <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-rose-500">Tradieez</span>
          </Link> */}

        {/* Desktop Navigation */}
        <div className="hidden space-x-6 md:flex">
          <Link
            href="/"
            className={`hover:text-secondary ${
              pathname === "/" ? "text-secondary" : "text-white"
            }`}
          >
            Home
          </Link>
          <Link
            href="/find-work"
            className={`hover:text-secondary ${
              pathname === "/find-work" ? "text-secondary" : "text-white"
            }`}
          >
            Find Work
          </Link>
          <Link
            href="/find-candidates"
            className={`hover:text-secondary ${
              pathname === "/find-candidates" ? "text-secondary" : "text-white"
            }`}
          >
            Find-Candidates
          </Link>
          {/* <Link href="/employers" className="hover:text-gray-300">
            Employers
          </Link> */}
          {/* <Link href="/candidates" className="hover:text-gray-300">
            Candidates
          </Link> */}
          <Link
            href="/dashboard/candidate/overview"
            className={`hover:text-secondary ${
              pathname === "/dashboard/candidate/overview"
                ? "text-secondary"
                : "text-white"
            }`}
          >
            Candidate-Dashboard
          </Link>
          <Link
            href="/dashboard/employer/overview"
            className={`hover:text-secondary ${
              pathname === "/dashboard/employer/overview"
                ? "text-secondary"
                : "text-white"
            }`}
          >
            Employer-Dashboard
          </Link>
           {/* <Link
            href="/dashboard/employer/subscription"
            className={`hover:text-secondary ${
              pathname === "/dashboard/employer/subscription" ? "text-secondary" : "text-white"
            }`}
          >
            Subscription
          </Link> */}
          <Link
            href="/blog-list"
            className={`hover:text-secondary ${
              pathname === "/blog-list" ? "text-secondary" : "text-white"
            }`}
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            className={`hover:text-secondary ${
              pathname === "/contact" ? "text-secondary" : "text-white"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden items-center space-x-4 md:flex">
          <Link
            href="/login"
            className="rounded-md border border-white px-4 py-1.5 text-sm hover:bg-white/10"
          >
            Sign In
          </Link>
          {/* <Link
            href="/dashboard/employer/post-job"
            className="rounded-md bg-white px-4 py-1.5 text-sm font-medium text-[#1a2c4e] hover:bg-gray-100"
          >
            Post A Job
          </Link> */}
          <button
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
          </button>

          <div onClick={() => router.push("/dashboard/candidate/settings")} className="flex items-center gap-2 cursor-pointer">
            <div className="h-8 w-8 rounded-full">
              <Image
                src="/images/avatar.png"
                alt="user"
                width={500}
                height={600}
              />
            </div>
            <span className="text-sm">Andrew Ainsley</span>
          </div>
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
