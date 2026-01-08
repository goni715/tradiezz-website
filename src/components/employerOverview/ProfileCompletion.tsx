"use client";
import { useAppSelector } from "@/redux/hooks/hooks";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProfileCompletion = () => {
  const router = useRouter();
  const { user } = useAppSelector((state) => state.user);
  const profile_img = user?.profile_image || "/images/profile_placeholder.png";

  return (
    <>
      <div className="mb-8 overflow-hidden rounded-lg bg-red-200 p-4 sm:p-6">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-1 items-center gap-4">
            <div className="h-12 w-12 overflow-hidden rounded-full bg-red-300">
              <Image
                src={
                    profile_img
                }
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/images/profile_placeholder.png";
                }}
                alt="Profile"
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              {/* <h3 className="font-medium text-gray-900">
                Your profile editing is not completed.
              </h3> */}
              <p className="text-sm text-gray-700">
                Complete your profile to start posting jobs and attracting candidates.
              </p>
            </div>
          </div>
          <button
            onClick={() => router.push("/dashboard/employer/settings")}
            className="flex items-center gap-2 cursor-pointer rounded-md bg-white px-4 py-2 text-sm font-medium text-red-500 shadow-sm hover:bg-gray-50"
          >
            Edit Profile
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileCompletion;
