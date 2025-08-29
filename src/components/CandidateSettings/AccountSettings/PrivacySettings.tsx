"use client";
import Error from "@/components/validation/Error";
import { useUpdateCandidateProfileMutation } from "@/redux/features/user/userApi";
import { useAppSelector } from "@/redux/hooks/hooks";
import { useState } from "react";

const PrivacySettings = () => {
  const { user } = useAppSelector((state) => state.user);
  const [profileIsPublic, setProfileIsPublic] = useState<boolean>(
    user?.profile_private
  );

  const { ProfileError } = useAppSelector((state) => state.auth);
  const [updateCandidateProfile] = useUpdateCandidateProfileMutation();

  const handleChange = (val: boolean) => {
    const formData = new FormData();
    setProfileIsPublic(val);
    formData.append("profile_private", val.toString());
    updateCandidateProfile(formData);
  };

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Profile Privacy</h2>
            {ProfileError && <Error message={ProfileError} />}
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                {profileIsPublic ? (
                  <p className="text-sm text-gray-500">
                    Your profile is{" "}
                    <span className="bg-red-300 text-red-800 p-1 rounded-md">
                      private
                    </span>{" "}
                    now
                  </p>
                ) : (
                  <p className="text-sm text-gray-500">
                    Your profile is{" "}
                    <span className="bg-green-300 text-green-800 p-1 rounded-md">
                      public
                    </span>{" "}
                    now
                  </p>
                )}
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={profileIsPublic}
                  onChange={(e) => handleChange(e.target.checked)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacySettings;
