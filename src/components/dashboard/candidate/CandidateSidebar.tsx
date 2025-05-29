"use client"
import { LayoutDashboardIcon, BriefcaseIcon, BookmarkIcon, SettingsIcon, MessageSquareMore } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"

const CandidateSidebar = () =>{
  return (
    <>
    <aside className="w-full py-6 border-r border-gray-200 bg-white md:w-64 lg:w-72">
        <div className="px-4 mb-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Candidate Dashboard
          </h2>
        </div>

        <nav className="flex-1 space-y-1 px-2">
          <SidebarLink
            href="/dashboard/candidate/overview"
            icon={<LayoutDashboardIcon className="h-5 w-5" />}
            label="Overview"
          />
           <SidebarLink
            href="/dashboard/candidate/applied-jobs"
            icon={<BriefcaseIcon className="h-5 w-5" />}
            label="Applied Jobs"
            // badge="08"
          />
          <SidebarLink
            href="/dashboard/candidate/favourite-jobs"
            icon={<BookmarkIcon className="h-5 w-5" />}
            label="Favourite Jobs"
          />
          {/* <SidebarLink
            href="/dashboard/candidate/job-alerts"
            icon={<BellIcon className="h-5 w-5" />} 
            label="Job Alerts"
            badge="09"
          />   */}
           <SidebarLink
            href="/dashboard/candidate/messages"
            icon={<MessageSquareMore className="h-5 w-5" />}
            label="Messages"
          />
          <SidebarLink
            href="/dashboard/candidate/settings"
            icon={<SettingsIcon className="h-5 w-5" />}
            label="Settings"
          />
        </nav>
      </aside>
    </>
  )
}

export default CandidateSidebar;



const SidebarLink = ({
  href,
  icon,
  label,
  badge,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  badge?: string;
}) => {


  const pathname = usePathname();
  const router = useRouter();
  const active = pathname === href;



  return (
    <button
      onClick={()=>router.push(href)}
      className={`flex w-full cursor-pointer items-center space-x-2 px-3 py-2 rounded-md ${
        active
          ? "bg-[#E7F0FA] text-primary border-l-4 border-[#092443]"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {icon}
      <span>{label}</span>
      {badge && (
        <span className="ml-auto bg-gray-200 text-gray-800 text-xs px-1.5 py-0.5 rounded-md">
          {badge}
        </span>
      )}
    </button>
  );
};
