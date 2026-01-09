/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAuthId, setEmail, setOtp, setToken, setUserDetails, setVerifyEmail } from "@/helper/SessionHelper";
import { ErrorToast, SuccessToast } from "@/helper/ValidationHelper";
import { SetChangePasswordError, SetForgotError, SetLoginError, SetRegisterError, SetResetPasswordError, SetVerifyAccountError, SetVerifyAccountOtpError, SetVerifyOtpError } from "./authSlice";
import { apiSlice } from "../api/apiSlice";
import { jwtDecode } from "jwt-decode";
import { IAuthUser } from "@/types/global.type";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerCandidate: builder.mutation({
      query: (data) => ({
        url: "/auth/register-candidate",
        method: "POST",
        body: data,
      }),
      async onQueryStarted({ email }, { queryFulfilled }) {
        try {
          await queryFulfilled;
          setVerifyEmail(email);
          SuccessToast("Please check you email");
        } catch (err: any) {
          const status = err?.error?.status;
          const message = err?.error?.data?.message || "Something Went Wrong";
          if (status === 500) {
            ErrorToast("Something Went Wrong");
          } else {
            ErrorToast(message);
          }
        }
      },
    }),
    registerEmployer: builder.mutation({
      query: (data) => ({
        url: "/auth/register-employer",
        method: "POST",
        body: data,
      }),
      async onQueryStarted({ email }, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          setVerifyEmail(email);
          SuccessToast("Please check you email");
        } catch (err: any) {
          const status = err?.error?.status;
          const message = err?.error?.data?.message || "Something Went Wrong";
          if (status === 500) {
            dispatch(SetRegisterError("Something Went Wrong"));
          } else {
            dispatch(SetRegisterError(message));
          }
        }
      },
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login-user",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          const token = res?.data?.data?.accessToken;
          const { fullName, email, profileImg } = jwtDecode(token) as IAuthUser;
          setToken(token);
          setUserDetails({
            fullName,
            email,
            profileImg
          })
          SuccessToast("Login Success");
          setTimeout(() => {
            window.location.href = "/";
          }, 300);
        } catch (err: any) {
          const status = err?.error?.status;
          const message = err?.error?.data?.message || "Something Went Wrong";
          if (status === 500) {
            dispatch(SetLoginError("Something Went Wrong"));
          } else {
            dispatch(SetLoginError(message));
          }
        }
      },
    }),
    forgotPasswordSendOtp: builder.mutation({
      query: (data) => ({
        url: "/auth/forgot-password-send-otp",
        method: "POST",
        body: data,
      }),
      async onQueryStarted({ email }, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          setEmail(email);
          SuccessToast("OTP is sent successfully");
        } catch (err: any) {
          const status = err?.error?.status;
          const message = err?.error?.data?.message || "Something Went Wrong";
          if (status === 500) {
            dispatch(SetForgotError("Something Went Wrong"));
          } else {
            dispatch(SetForgotError(message));
          }
        }
      },
    }),
    forgotPasswordResendOtp: builder.mutation({
      query: (data) => ({
        url: "/auth/forgot-password-send-otp",
        method: "POST",
        body: data,
      }),
      async onQueryStarted({ email }, { queryFulfilled }) {
        try {
          await queryFulfilled;
          setEmail(email);
          SuccessToast("OTP is sent successfully");
        } catch (err: any) {
          const status = err?.error?.status;
          const message = err?.error?.data?.message || "Something Went Wrong";
          if (status === 500) {
            ErrorToast("Something Went Wrong");
          } else {
            ErrorToast(message);
          }
        }
      },
    }),
    forgotPasswordVerifyOtp: builder.mutation({
      query: (data) => ({
        url: "/auth/forgot-password-verify-otp",
        method: "POST",
        body: data,
      }),
      async onQueryStarted({ otp }, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          setOtp(otp);
          SuccessToast("Otp is verified successfully");
        } catch (err: any) {
          const status = err?.error?.status;
          const message = err?.error?.data?.message || "Something Went Wrong";
          if (status === 500) {
            dispatch(SetVerifyOtpError("Something Went Wrong"));
          } else {
            dispatch(SetVerifyOtpError(message));
          }
        }
      },
    }),
    forgotPasswordReset: builder.mutation({
      query: (data) => ({
        url: `/auth/forgot-password-set-new-password`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          SuccessToast("Password is reset successfully!");
          localStorage.clear();
          setTimeout(() => {
            window.location.href = "/login";
          }, 300);
        } catch (err: any) {
          const status = err?.error?.status;
          const message = err?.error?.data?.message || "Something Went Wrong";
          if (status === 500) {
            dispatch(SetResetPasswordError("Something Went Wrong"));
          } else {
            dispatch(SetResetPasswordError(message));
          }
        }
      },
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: "/auth/change-password",
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          SuccessToast("Password is updated successfully");
          setTimeout(() => {
            localStorage.clear();
            window.location.href = "/login";
          }, 300);
        } catch (err: any) {
          const status = err?.error?.status;
          const message = err?.error?.data?.message || "Something Went Wrong";
          if (status === 500) {
            dispatch(SetChangePasswordError("Something Went Wrong"));
          } else {
            dispatch(SetChangePasswordError(message));
          }
        }
      },
    }),
    verifyAccountSendOtp: builder.mutation({
      query: (data) => ({
        url: "/auth/resend-verification-email",
        method: "POST",
        body: data,
      }),
      async onQueryStarted({ email }, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          setVerifyEmail(email);
          SuccessToast("Please check your email");
        } catch (err: any) {
          const status = err?.error?.status;
          const message = err?.error?.data?.message || "Something Went Wrong";
          if (status === 500) {
            dispatch(SetVerifyAccountError("Something Went Wrong"));
          } else {
            dispatch(SetVerifyAccountError(message));
          }
        }
      },
    }),
    verifyAccountResendOtp: builder.mutation({
      query: (data) => ({
        url: "/auth/resend-verification-email",
        method: "POST",
        body: data,
      }),
      async onQueryStarted({ email }, { queryFulfilled }) {
        try {
          await queryFulfilled;
          setVerifyEmail(email);
          SuccessToast("OTP is sent successfully");
        } catch (err: any) {
          const status = err?.error?.status;
          const message = err?.error?.data?.message;
          if (status === 500) {
            ErrorToast("Something Went Wrong");
          } else {
            ErrorToast(message);
          }
        }
      },
    }),
    verifyAccountVerifyOtp: builder.mutation({
      query: (data) => ({
        url: "/auth/verify-email",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          SuccessToast("Account is verified successfully");
          localStorage.clear();
          setTimeout(() => {
            window.location.href = "/login";
          }, 300);
        } catch (err: any) {
          const message = err?.error?.data?.message;
          dispatch(SetVerifyAccountOtpError(message));
        }
      },
    }),
    deleteAccount: builder.mutation({
      query: () => ({
        url: `/auth/delete-account?authId=${getAuthId()}`,
        method: "DELETE",
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
          SuccessToast("Account is deleted successfully");
          setTimeout(() => {
            localStorage.clear();
            window.location.href = "/";
          }, 300);
        } catch (err: any) {
          const message = err?.error?.data?.message;
          ErrorToast(message);
        }
      },
    }),
  }),
});

export const {
  useRegisterCandidateMutation,
  useRegisterEmployerMutation,
  useLoginMutation,
  useForgotPasswordSendOtpMutation,
  useForgotPasswordResendOtpMutation,
  useForgotPasswordVerifyOtpMutation,
  useForgotPasswordResetMutation,
  useChangePasswordMutation,
  useVerifyAccountSendOtpMutation,
  useVerifyAccountResendOtpMutation,
  useVerifyAccountVerifyOtpMutation,
  useDeleteAccountMutation
} = authApi;
