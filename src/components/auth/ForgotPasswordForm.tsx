"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import CustomInput from "../form/CustomInput";
import { z } from "zod";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { useForgotPasswordSendOtpMutation } from "@/redux/features/auth/authApi";
import { SetForgotError } from "@/redux/features/auth/authSlice";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import FormError from "../validation/FormError";
import { forgotPasswordSendOtpSchema } from "@/schema/auth.schema";
import SubmitButton from "../form/SubmitButton";

type TFormValues = z.infer<typeof forgotPasswordSendOtpSchema>;

const ForgotPasswordForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { ForgotError } = useAppSelector((state) => state.auth);
  const [forgotPasswordSendOtp, { isLoading, isSuccess }] =
    useForgotPasswordSendOtpMutation();
  const { handleSubmit, control } = useForm({
    resolver: zodResolver(forgotPasswordSendOtpSchema),
  });


   useEffect(()=>{
      if(isSuccess){
        router.push("/verify-otp");
      }
    }, [isSuccess, router]);

  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    dispatch(SetForgotError(""));
    forgotPasswordSendOtp(data);
  };

  return (
    <>
      {ForgotError && <FormError message={ForgotError} />}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <CustomInput
          label="Email"
          name="email"
          type="text"
          control={control}
          placeholder="Enter email address"
        />
        <SubmitButton isLoading={isLoading}> Continue </SubmitButton>
      </form>
    </>
  );
};

export default ForgotPasswordForm;
