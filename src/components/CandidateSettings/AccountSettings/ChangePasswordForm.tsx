"use client";

import CustomInput from "@/components/form/CustomInput";
import SubmitButton from "@/components/form/SubmitButton";
import Error from "@/components/validation/FormError";
import PasswordStrength from "@/components/validation/PasswordStrength";
import { useChangePasswordMutation } from "@/redux/features/auth/authApi";
import { SetChangePasswordError } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { changePasswordSchema } from "@/schema/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

type TFormValues = z.infer<typeof changePasswordSchema>;

const ChangePasswordForm = () => {
  const dispatch = useAppDispatch();
  const { ChangePasswordError } = useAppSelector((state) => state.auth);
  const [changePassword, { isLoading }] = useChangePasswordMutation();
  const { handleSubmit, control, watch, trigger } = useForm({
    resolver: zodResolver(changePasswordSchema),
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
    dispatch(SetChangePasswordError(""));
    changePassword({
      currentPassword: data.currentPassword,
      newPassword: data.newPassword,
    });
  };

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-medium mb-6">Change Password</h2>
        {ChangePasswordError && <Error message={ChangePasswordError} />}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            <CustomInput
              label="Current Password"
              name="currentPassword"
              type="password"
              control={control}
              placeholder="Enter Current password"
            />
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
          </div>
          <SubmitButton isLoading={isLoading}> Save Changes </SubmitButton>
        </form>
      </div>
    </>
  );
};

export default ChangePasswordForm;
