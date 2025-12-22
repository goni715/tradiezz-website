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
import { useRouter } from "next/navigation";




const LoginForm = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
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
        {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or</span>
            </div>
          </div>

          {/* Verify Account Button */}
          <button
            onClick={()=>router.push("/verify-account")}
            type="button"
            className="w-full cursor-pointer bg-white border-2 border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 hover:border-gray-400 focus:ring-gray-200 transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Verify Account</span>
          </button>
      </form>
    </>
  );
};

export default LoginForm;
