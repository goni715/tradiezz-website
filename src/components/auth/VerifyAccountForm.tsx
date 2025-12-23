"use client";
import { useRouter } from "next/navigation";
import CustomInput from "../form/CustomInput";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useVerifyAccountSendOtpMutation } from "@/redux/features/auth/authApi";
import { z } from "zod";
import { SetVerifyAccountError } from "@/redux/features/auth/authSlice";
import { useEffect } from "react";
import FormError from "../validation/FormError";
import { forgotPasswordSendOtpSchema } from "@/schema/auth.schema";
import SubmitButton from "../form/SubmitButton";

type TFormValues = z.infer<typeof forgotPasswordSendOtpSchema>;


const VerifyAccountForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { VerifyAccountError } = useAppSelector((state) => state.auth);
  const [verifyAccountSendOtp, { isLoading, isSuccess}] = useVerifyAccountSendOtpMutation();
  const { handleSubmit, control } = useForm({
      resolver: zodResolver(forgotPasswordSendOtpSchema),
  });
  
  
  useEffect(()=>{
    if(isSuccess){
      router.push("/verify-account-otp");
    }
  }, [isSuccess, router])
  
  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    dispatch(SetVerifyAccountError(""));
    verifyAccountSendOtp(data);
  };




  return (
    <>
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-gray-900">
          Verify Your Account
        </h1>
        <p className="text-gray-600">
          We will send a verification code to your email address
        </p>
      </div>
      {VerifyAccountError && <FormError message={VerifyAccountError} />}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <CustomInput label="Email" name="email" type="text" control={control} placeholder="Enter email address"/>
        <SubmitButton isLoading={isLoading} loadingTitle="Sending Code..."> Send Verification Code </SubmitButton>
      </form>
    </>
  );
};

export default VerifyAccountForm;
