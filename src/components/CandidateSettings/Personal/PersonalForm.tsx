"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomInput from "@/components/form/CustomInput";
import { z } from "zod";
import { useUpdateCandidateProfileMutation } from "@/redux/features/user/userApi";
import { SetProfileError } from "@/redux/features/auth/authSlice";
import { CgSpinnerTwo } from "react-icons/cg";
import Error from "@/components/validation/Error";
import { useState } from "react";
import { candidatePersonalSchema } from "@/schemas/candidate.schema";
import CustomQuilEditor from "@/components/form/CustomQuilEditor";
import EditProfilePic from "./EditProfilePic";
import UpdateLocationForm from "../LocationForm/UpdateLocationForm";
import SetLocationForm from "../LocationForm/SetLocationForm";

type TFormValues = z.infer<typeof candidatePersonalSchema>;

const PersonalForm = () => {
  const [file, setFile] = useState<File | null>(null)
  const { user } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();
  const { ProfileError } = useAppSelector((state) => state.auth);
  const [updateCandidateProfile, { isLoading }] =
    useUpdateCandidateProfileMutation();
  const { handleSubmit, control } = useForm({
    resolver: zodResolver(candidatePersonalSchema),
    defaultValues: {
      name: user?.name as string,
      phone_number: user?.phone_number as string,
      address: user?.address===null ? "" : user?.address,
      details: user?.details===null ? "" : user?.details
    },
  });

  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    dispatch(SetProfileError(""));
    const formData = new FormData();
    if(file){
      formData.append("profile_image", file);
    }

    formData.append("name", data.name);
    formData.append("phone_number", data.phone_number)
    formData.append("address", data.address)
    formData.append("details", data.details)
    updateCandidateProfile(formData)
  };

  return (
    <>
      <div className="mx-auto bg-white p-4 md:p-6 mb-8 shadow-md rounded-md">
        <div className="">
          <p className="text-lg font-semibold mb-4">Update Profile</p>
          {ProfileError && <Error message={ProfileError} />}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <EditProfilePic setFile={setFile} />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-lg mt-4"
          >
            <div className="space-y-4">
              <CustomInput
                label="Name"
                name="name"
                type="text"
                control={control}
                placeholder="Enter full name"
              />

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    disabled
                    value={user?.email}
                    placeholder="Email address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md disabled:bg-gray-200 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                  />
                </div>
              </div>

              <CustomInput
                label="Phone Number(only UK)"
                name="phone_number"
                type="text"
                control={control}
                placeholder="Enter phone number"
              />

              <CustomInput
                label="Address"
                name="address"
                type="text"
                control={control}
                placeholder="Enter address"
              />

              <CustomQuilEditor label="Description" name="details" control={control} placeholder="Write a description about yourself..."/>

              <button
                type="submit"
                className="px-4 w-full md:w-64 md:justify-center py-2 flex gap-2 items-center bg-primary hover:bg-[#2b4773] text-white font-medium rounded-md focus:outline-none transition-colors cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <CgSpinnerTwo className="animate-spin" fontSize={16} />
                    Processing...
                  </>
                ) : (
                  "Save Changes"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {
        user?.locations ? (
          <UpdateLocationForm />
        ): (
          <SetLocationForm/>
        )
      }
    </>
  );
};

export default PersonalForm;
