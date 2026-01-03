/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import TagTypes from "@/constant/tagType.constant";
import { apiSlice } from "../api/apiSlice";
import { ErrorToast, SuccessToast } from "@/helper/ValidationHelper";
import { IParam } from "@/types/global.type";
import { SetRecentAppliedJobs, SetRecentJobs } from "./jobSlice";

export const jobApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEmployerJobs: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args !== undefined && args.length > 0) {
          args.forEach((item: IParam) => {
            if (item.value) {
              params.append(item.name, item.value);
            }
          });
        }
        return {
          url: "/job/get-my-jobs",
          method: "GET",
          params: params,
        };
      },
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.employerJobs],
    }),
    getRecentPostedJobs: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args !== undefined && args.length > 0) {
          args.forEach((item: IParam) => {
            if (item.value) {
              params.append(item.name, item.value);
            }
          });
        }
        return {
          url: "/jobs/all/employer",
          method: "GET",
          params: params,
        };
      },
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.recentPostedJobs],
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          const jobs = res?.data?.data?.result || [];
          dispatch(SetRecentJobs(jobs));
        } catch (err: any) {
          const message = err?.error?.data?.message;
          ErrorToast(message);
        }
      },
    }),
    createJob: builder.mutation({
      query: (data) => ({
        url: "/job/create-job",
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => {
        if (result?.success) {
          return [TagTypes.employerJobs, TagTypes.recentPostedJobs];
        }
        return [];
      },
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
          SuccessToast("Job is posted successfully");
        } catch (err: any) {
          const message = err?.error?.data?.message;
          ErrorToast(message);
        }
      },
    }),
    getSingleJob: builder.query({
      query: (id) => ({
        url: `/job/get-my-single-job/${id}`,
        method: "GET",
      }),
      keepUnusedDataFor: 600,
      providesTags: (result, error, arg) => [{ type: TagTypes.job, id: arg }],
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch {
          ErrorToast("Server error is occured");
        }
      },
    }),
    updateJob: builder.mutation({
      query: ({ id, data }) => ({
        url: `/job/update-my-job/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => {
        if (result?.success) {
          return [
            TagTypes.jobs,
            TagTypes.employerJobs,
            TagTypes.favouriteJobs,
            TagTypes.favouriteJobIds,
            TagTypes.recentPostedJobs,
            { type: TagTypes.job, id: arg.id },
            { type: TagTypes.findJob, id: arg.id },
          ];
        }
        return [];
      },
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
          SuccessToast("Update Success");
        } catch (err: any) {
          const message = err?.error?.data?.message;
          ErrorToast(message);
        }
      },
    }),
    deleteJob: builder.mutation({
      query: (id: string) => ({
        url: `/job/delete-my-job/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(args, { queryFulfilled }) {
        try {
          await queryFulfilled;
          SuccessToast("Job is deleted successfully");
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
      invalidatesTags: (result, error, arg) => {
        if (result?.success) {
          return [TagTypes.employerJobs];
        }
        return [];
      },
    }),
    makeActiveExpireJob: builder.mutation({
      query: ({ id, data }) => ({
        url: `/jobs/make_expire_jobs/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => {
        if (result?.success) {
          return [TagTypes.employerJobs, { type: TagTypes.job, id: arg.id }];
        }
        return [];
      },
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
          SuccessToast("Update success");
        } catch (err: any) {
          const message = err?.error?.data?.message;
          ErrorToast(message);
        }
      },
    }),
    getJobs: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args !== undefined && args.length > 0) {
          args.forEach((item: IParam) => {
            if (item.value) {
              params.append(item.name, item.value);
            }
          });
        }
        return {
          url: "/job/get-candidate-jobs",
          method: "GET",
          params: params,
        };
      },
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.jobs],
    }),
    getSingleFindJob: builder.query({
      query: (id) => ({
        url: `/jobs/get_details/${id}`,
        method: "GET",
      }),
      keepUnusedDataFor: 600,
      providesTags: (result, error, arg) => [
        { type: TagTypes.findJob, id: arg },
      ],
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (err: any) {
          ErrorToast("Server error is occured");
        }
      },
    }),
    getFavouriteJobs: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args !== undefined && args.length > 0) {
          args.forEach((item: IParam) => {
            if (item.value) {
              params.append(item.name, item.value);
            }
          });
        }
        return {
          url: `/favorite-job/get-favorite-jobs`,
          method: "GET",
          params: params,
        };
      },
      keepUnusedDataFor: 600,
      providesTags: (result, error, arg) => [TagTypes.favouriteJobs],
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (err: any) {
          ErrorToast("Server error is occured");
        }
      },
    }),
    getFavouriteJobIds: builder.query({
      query: () => ({
        url: `/favorite-job/get-favorite-job-id-list`,
        method: "GET",
      }),
      keepUnusedDataFor: 600,
      providesTags: (result, error, arg) => [TagTypes.favouriteJobIds],
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (err: any) {
          ErrorToast("Server error is occured");
        }
      },
    }),
    addRemoveFavouriteJob: builder.mutation({
      query: (data) => ({
        url: `/favorite-job/add-remove-favorite-job`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => {
        if (result?.success) {
          return [
            TagTypes.jobs,
            TagTypes.favouriteJobs,
            TagTypes.favouriteJobIds,
            { type: TagTypes.job, id: arg },
          ];
        }
        return [];
      },
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          const msg = res?.data?.message;
        } catch (err: any) {
          const message = err?.error?.data?.message;
          ErrorToast(message);
        }
      },
    }),
  }),
});

export const {
  useGetEmployerJobsQuery,
  useCreateJobMutation,
  useGetSingleJobQuery,
  useUpdateJobMutation,
  useMakeActiveExpireJobMutation,
  useGetRecentPostedJobsQuery,
  useGetJobsQuery,
  useGetSingleFindJobQuery,
  useAddRemoveFavouriteJobMutation,
  useGetFavouriteJobsQuery,
  useGetFavouriteJobIdsQuery,
  useDeleteJobMutation,
} = jobApi;
