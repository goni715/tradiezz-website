"use client";

import { useRegisterEmployerMutation } from "@/redux/features/auth/authApi";
import { SetRegisterError } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { employerRegisterSchema, TEmployerFormValues } from "@/schema/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import CustomInput from "../form/CustomInput";
import PasswordStrength from "../validation/PasswordStrength";
import FormError from "../validation/FormError";
import CustomCheckbox from "../form/CustomCheckbox";
import SubmitButton from "../form/SubmitButton";


const EmployerRegisterForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { RegisterError } = useAppSelector((state) => state.auth);
  const [register, { isLoading, isSuccess }] = useRegisterEmployerMutation();
  const { handleSubmit, control, watch, trigger } = useForm({
    resolver: zodResolver(employerRegisterSchema),
  });

  const password = watch("password");

  useEffect(() => {
    if (password) {
      // Only trigger validation if confirmPassword has been entered
      const confirmPassword = watch("confirmPassword");
      if (confirmPassword) {
        trigger("confirmPassword");
      }
    }
  }, [password, watch, trigger]);

  //if register is success
  useEffect(() => {
    if (isSuccess) {
      router.push("/verify-account-otp");
    }
  }, [isSuccess, router]);

  const onSubmit: SubmitHandler<TEmployerFormValues> = (data) => {
    dispatch(SetRegisterError(""));
    register(data);
  };


  return (
    <>
      {RegisterError && <FormError message={RegisterError} />}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <CustomInput
          label="Employer Name"
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
        />
        <CustomInput
          label="Phone Number(only UK)"
          name="phone"
          type="text"
          control={control}
          placeholder="e.g., +44 20 1234 5678 or 020 1234 5678"
        />
        <CustomInput
          label="Password"
          name="password"
          type="password"
          control={control}
          placeholder="Enter password"
        />
        {password && <PasswordStrength password={password} />}
        <CustomInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          control={control}
          placeholder="Enter confirm password"
        />
        <CustomCheckbox
          name="terms"
          label="I confirm I am not a recruitment agency and understand this
              platform is for direct employers and job seekers only."
          control={control}
        />
        <SubmitButton isLoading={isLoading}> Sign Up </SubmitButton>
      </form>
    </>
  );
};

export default EmployerRegisterForm;
