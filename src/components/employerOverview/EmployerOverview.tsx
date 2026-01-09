"use client"
import { IMyJob } from "@/types/job.type";
import RecentPostedJobs from "./RecentPostedJobs";
import OverviewStats from "./OverviewStats";
import { TEmployerStats } from "@/types/dashboard.type";

type TProps = {
  stats: TEmployerStats;
  jobs: IMyJob[];
}


const EmployerOverview = ( { jobs, stats }: TProps ) => {
  return (
    <main className="flex-1 overflow-auto">
      <div className="mx-auto max-w-5xl p-4 md:p-6 lg:p-8">
        {/* Header */}
        {/* <div className="mb-6">
          <h1 className="text-xl font-semibold text-gray-900">
            Hello, Esther Howard
          </h1>
          <p className="text-sm text-gray-500">
            Here is your daily activities and job alerts
          </p>
        </div> */}

        <OverviewStats stats={stats}/>

        {/* Profile Completion Alert */}
        {/* <div className="mb-8 overflow-hidden rounded-lg bg-red-200 p-4 sm:p-6">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-1 items-center gap-4">
              <div className="h-12 w-12 overflow-hidden rounded-full bg-red-300">
                <Image
                  src="/images/profile.png"
                  alt="Profile"
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">
                  Your profile editing is not completed.
                </h3>
                <p className="text-sm text-gray-700">
                  Complete your profile editing & build your custom Resume
                </p>
              </div>
            </div>
            <button onClick={()=> router.push('/dashboard/employer/settings')} className="flex items-center gap-2 cursor-pointer rounded-md bg-white px-4 py-2 text-sm font-medium text-red-500 shadow-sm hover:bg-gray-50">
              Edit Profile
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div> */}

        <RecentPostedJobs jobs={jobs}/>
        
      </div>
    </main>
  );
}

export default EmployerOverview;