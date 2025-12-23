"use client";

import { z } from "zod";
import CustomInput from "../form/CustomInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PasswordStrength from "../validation/PasswordStrength";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { useForgotPasswordResetMutation } from "@/redux/features/auth/authApi";
import { SetResetPasswordError } from "@/redux/features/auth/authSlice";
import FormError from "../validation/FormError";
import { resetPasswordSchema } from "@/schema/auth.schema";
import SubmitButton from "../form/SubmitButton";
import { getEmail, getOtp } from "@/helper/SessionHelper";

type TFormValues = z.infer<typeof resetPasswordSchema>;

const ResetPasswordForm = () => {
  const dispatch = useAppDispatch();
  const { ResetPasswordError } = useAppSelector((state) => state.auth);
  const [forgotPasswordReset, { isLoading }] = useForgotPasswordResetMutation();
  const { handleSubmit, control, watch, trigger } = useForm({
    resolver: zodResolver(resetPasswordSchema),
  });

  const newPassword = watch("newPassword");

  useEffect(() => {
    if (newPassword) {
      const confirmPassword = watch("confirmPassword");
      if (confirmPassword === newPassword) {
        trigger("confirmPassword");
      }
    }
  }, [newPassword, watch, trigger]);

  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    dispatch(SetResetPasswordError(""));
    forgotPasswordReset({
      email: getEmail(),
      otp: getOtp(),
      password: data.newPassword
    });
  };

  return (
    <>
      {ResetPasswordError && <FormError message={ResetPasswordError} />}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <CustomInput
          label="New Password"
          name="newPassword"
          type="password"
          control={control}
          placeholder="Enter new password"
        />
        {newPassword && <PasswordStrength password={newPassword} />}
        <CustomInput
          label="Confirm New Password"
          name="confirmPassword"
          type="password"
          control={control}
          placeholder="Enter new password"
        />
        <SubmitButton isLoading={isLoading}> Reset Password </SubmitButton>
      </form>
    </>
  );
};

export default ResetPasswordForm;
