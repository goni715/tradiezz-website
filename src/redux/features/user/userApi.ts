/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import TagTypes from "@/constant/tagType.constant";
import { apiSlice } from "../api/apiSlice";
import { SetUser } from "./userSllice";
import { ErrorToast, SuccessToast } from "@/helper/ValidationHelper";
import { SetProfileError } from "../auth/authSlice";


export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => ({
        url: "/auth/profile",
        method: "GET",
      }),
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.me],
      async onQueryStarted(_arg, { queryFulfilled, dispatch}) {
        try {
          const res = await queryFulfilled;
          const data = res?.data?.data;
          dispatch(SetUser(data))
        } catch (err:any) {
         ErrorToast("Server error is occured");
        }
      },
    }),
    updateEmployerProfile: builder.mutation({
      query: (data) => ({
        url: `/auth/employer/edit-profile`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result) => {
        if (result?.success) {
          return [TagTypes.me];
        }
        return [];
      },
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          SuccessToast("Update Success");
        } catch (err:any) {
          const message = err?.error?.data?.message;
          dispatch(SetProfileError(message))
        }
      },
    }),
    updateCandidateProfile: builder.mutation({
      query: (data) => ({
        url: `/auth/user/edit-profile`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result) => {
        if (result?.success) {
          return [TagTypes.me];
        }
        return [];
      },
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          SuccessToast("Update Success");
        } catch (err:any) {
          const message = err?.error?.data?.message;
          dispatch(SetProfileError(message))
        }
      },
    }),
    updateCandidateLocation: builder.mutation({
      query: (data) => ({
        url: `/auth/candidate_map_locations_update`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result) => {
        if (result?.success) {
          return [TagTypes.me];
        }
        return [];
      },
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          SuccessToast("Update Success");
        } catch (err:any) {
          const message = err?.error?.data?.message;
          dispatch(SetProfileError(message))
        }
      },
    }),
    updateEmployerLocation: builder.mutation({
      query: (data) => ({
        url: `/auth/employer_map_locations_update`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result) => {
        if (result?.success) {
          return [TagTypes.me];
        }
        return [];
      },
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          SuccessToast("Update Success");
        } catch (err:any) {
          const message = err?.error?.data?.message;
          dispatch(SetProfileError(message))
        }
      },
    }),
    addWorkExperience: builder.mutation({
      query: (data) => ({
        url: `/auth/add_work_experience`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result) => {
        if (result?.success) {
          return [TagTypes.me];
        }
        return [];
      },
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          SuccessToast("Added Success");
        } catch (err:any) {
          const message = err?.error?.data?.message;
          dispatch(SetProfileError(message))
        }
      },
    }),
    removeWorkExperience: builder.mutation({
      query: (id) => ({
        url: `/auth/remove_work_experience/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: (result) => {
        if (result?.success) {
          return [TagTypes.me];
        }
        return [];
      },
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          SuccessToast("Added Success");
        } catch (err:any) {
          const message = err?.error?.data?.message;
          dispatch(SetProfileError(message))
        }
      },
    }),
    updateWorkExperience: builder.mutation({
      query: ({ data, id}) => ({
        url: `/auth/update_work_experience/${id}`,
        method: "PATCH",
        body: data
      }),
      invalidatesTags: (result) => {
        if (result?.success) {
          return [TagTypes.me];
        }
        return [];
      },
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          SuccessToast("Update Success");
        } catch (err:any) {
          const message = err?.error?.data?.message;
          dispatch(SetProfileError(message))
        }
      },
    }),
  }),
});


export const { useGetMeQuery, useUpdateEmployerProfileMutation, useUpdateCandidateProfileMutation, useUpdateCandidateLocationMutation, useUpdateEmployerLocationMutation, useAddWorkExperienceMutation, useRemoveWorkExperienceMutation, useUpdateWorkExperienceMutation } = userApi;