"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomInput from "@/components/form/CustomInput";
import { z } from "zod";
import { SetProfileError } from "@/redux/features/auth/authSlice";
import Error from "@/components/validation/FormError";
import { useState } from "react";
import EditProfilePic from "./EditProfilePic";
import { candidatePersonalSchema } from "@/schema/candidate.schema";
import SubmitButton from "@/components/form/SubmitButton";
import CustomDatePicker from "@/components/form/CustomDatePicker";
import CustomQuilEditor from "@/components/form/CustomQuilEditor";
import { WarningToast } from "@/helper/ValidationHelper";
import { useUpdateCandidateProfileMutation } from "@/redux/features/user/userApi";

type TFormValues = z.infer<typeof candidatePersonalSchema>;

const PersonalForm = () => {
  const [file, setFile] = useState<File | null>(null)
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const { ProfileError } = useAppSelector((state) => state.auth);
  const [updateCandidateProfile, { isLoading }] =
    useUpdateCandidateProfileMutation();

  const initialDateOfBirth = user?.dateOfBirth.split('T')[0] as string || "";
  const { handleSubmit, control } = useForm({
    resolver: zodResolver(candidatePersonalSchema),
    defaultValues: {
      fullName: user?.fullName as string,
      email: user?.email,
      phone: user?.phone as string,
      description: user?.description as string,
      dateOfBirth: initialDateOfBirth
    },
  });


  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    dispatch(SetProfileError(""));
    const formData = new FormData();

    if (
      user.fullName === data.fullName &&
      user.phone === data.phone &&
      initialDateOfBirth === data.dateOfBirth &&
      user.description === data.description &&
      !file
    ) {
      WarningToast("No changes detected !");
      return;
    }

    //check fullName
    if (user.fullName !== data.fullName) {
      formData.append("fullName", data.fullName);
    }
    //check phone
    if (user.phone !== data.phone) {
      formData.append("phone", data.phone);
    }
    //check birth date
    if (initialDateOfBirth !== data.dateOfBirth) {
      formData.append("dateOfBirth", data.dateOfBirth);
    }
    //check description
    if (user.description !== data.description) {
      formData.append("description", data.description);
    }

    if (file) {
      formData.append("image", file);
    }

   //const formObject = Object.fromEntries(formData.entries());
   //console.log(formObject);

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
                name="fullName"
                type="text"
                control={control}
                placeholder="Enter full name"
              />
              <CustomInput
                label="Email"
                name="email"
                type="text"
                control={control}
                placeholder="Enter email address"
                disabled
              />
              <CustomInput
                label="Phone Number(only UK)"
                name="phone"
                type="text"
                control={control}
                placeholder="Enter phone number"
              />
              <CustomDatePicker
                label="Birth Date"
                name="dateOfBirth"
                control={control}
              />
              <CustomQuilEditor
                label="Description"
                name="description"
                control={control}
                height={200}
              />
              <SubmitButton isLoading={isLoading}> Save Changes </SubmitButton>
            </div>
          </form>
        </div>
      </div>

    </>
  );
};

export default PersonalForm;
