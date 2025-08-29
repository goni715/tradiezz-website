"use client";

// import { ChevronRight } from "lucide-react";
// import { useRouter } from "next/navigation";

const ProfileCompletion = () => {
  // const router = useRouter();
  //const { user } = useAppSelector((state) => state.user);
  //const profile_img = user ? (user?.profile_image === null ? "/images/profile_placeholder.png" : baseUrl + user?.profile_image) : "/images/profile_placeholder.png";


  return (
    <>
      <div className="mb-8 overflow-hidden rounded-lg bg-red-200 p-4 sm:p-6">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-1 items-center gap-4">
            {/* <div className="h-12 w-12 overflow-hidden rounded-full bg-red-300">
              <Image
                src={profile_img}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/images/profile_placeholder.png";
                }}
                alt="Profile"
                width={48}
                height={48}
                className="h-[48px] w-[48px] object-cover"
              />
            </div> */}
            <div>
              <p className="text-md text-gray-700 text-justify">
                ⚠️ Important: To get noticed by top employers faster, please make sure your profile includes:
                <span className="font-bold">
                  Job Seeker Title, Skills, Professional Summary, Address, Work Experience, Resume/CV, and Locations.
                 </span> Profiles missing any of these details may not be fully visible to employers.
              </p>
            </div>
          </div>
          {/* <button
            onClick={() => router.push("/dashboard/candidate/settings")}
            className="flex items-center gap-2 cursor-pointer rounded-md bg-white px-4 py-2 text-sm font-medium text-red-500 shadow-sm hover:bg-gray-50"
          >
            Edit Profile
            <ChevronRight className="h-4 w-4" />
          </button> */}
        </div>
      </div>
    </>
  );
};

export default ProfileCompletion;
