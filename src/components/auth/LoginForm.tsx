"use client";
import Link from "next/link";
import CustomInput from "../form/CustomInput";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, TLoginFormValues } from "@/schema/auth.schema";
import SubmitButton from "../form/SubmitButton";
import { SetLoginError } from "@/redux/features/auth/authSlice";
import FormError from "../validation/FormError";




const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { LoginError } = useAppSelector((state) => state.auth);
  const [login, { isLoading }] = useLoginMutation();
  const {handleSubmit, control } = useForm({
        resolver: zodResolver(loginSchema)
  })

  const onSubmit: SubmitHandler<TLoginFormValues> = (data) => {
    dispatch(SetLoginError(""))
    login(data)
  };


  return (
    <>
      {LoginError && <FormError message={LoginError} />}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <CustomInput label="Email" name="email" type="text" control={control} placeholder="Enter email address"/>
        <CustomInput label="Password" name="password" type="password" control={control} placeholder="Enter your password"/>

        <div className="flex justify-between items-center">
          <label className="flex items-center text-sm">
            <input type="checkbox" className="mr-2 cursor-pointer" /> Remember
            me
          </label>
          <Link
            href="/forgot-password"
            className="text-sm text-[#3AB0FF] hover:underline"
          >
            Forgot password?
          </Link>
        </div>
        <SubmitButton isLoading={isLoading}> Sign In </SubmitButton>
      </form>
    </>
  );
};

export default LoginForm;
