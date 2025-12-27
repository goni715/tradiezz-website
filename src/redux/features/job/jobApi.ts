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
          url: "/jobs/all/employer",
          method: "GET",
          params: params,
        };
      },
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.employerJobs],
    }),
    deleteEmployerJob: builder.mutation({
      query: (id: string) => ({
        url: `/jobs/deletes/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [TagTypes.employerJobs],
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
        url: "/jobs/create-jobs",
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
        url: `/jobs/details?jobId=${id}`,
        method: "GET",
      }),
      keepUnusedDataFor: 600,
      providesTags: (result, error, arg) => [{ type: TagTypes.job, id: arg }],
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (err: any) {
          ErrorToast("Server error is occured");
        }
      },
    }),
    updateJob: builder.mutation({
      query: ({ id, data }) => ({
        url: `/jobs/update-jobs/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => {
        if (result?.success) {
          return [
            TagTypes.jobs,
            TagTypes.employerJobs,
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
          SuccessToast("Job is updated successfully");
        } catch (err: any) {
          const message = err?.error?.data?.message;
          ErrorToast(message);
        }
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
    searchJobs: builder.query({
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
          url: "/jobs/get_search_filter",
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
      query: () => ({
        url: `/jobs/get_user_favorites_jobs`,
        method: "GET",
      }),
      keepUnusedDataFor: 600,
      providesTags: (result, error, arg) => [TagTypes.jobs, TagTypes.job],
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (err: any) {
          ErrorToast("Server error is occured");
        }
      },
    }),
    addRemoveFavouriteJob: builder.mutation({
      query: (id) => ({
        url: `/jobs/toggle_favorite/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: (result, error, arg) => {
        if (result?.success) {
          return [
            TagTypes.jobs,
            TagTypes.favouriteJobs,
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
    applyJob: builder.mutation({
      query: ({ id, data }) => ({
        url: `/jobs/apply/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => {
        if (result?.success) {
          return [TagTypes.appliedJobs, TagTypes.recentAppliedJobs, TagTypes.me];
        }
        return [];
      },
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
          SuccessToast("Applied successfully");
        } catch (err: any) {
          const message = err?.error?.data?.message;
          ErrorToast(message);
        }
      },
    }),
    getAppliedJobs: builder.query({
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
          url: "/jobs/get_all_apply_candidate",
          method: "GET",
          params: params,
        };
      },
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.appliedJobs],
    }),
    getRecentAppliedJobs: builder.query({
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
          url: "/jobs/get_all_apply_candidate",
          method: "GET",
          params: params,
        };
      },
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.recentAppliedJobs],
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          const jobs = res?.data?.data?.result || [];
          dispatch(SetRecentAppliedJobs(jobs));
        } catch (err: any) {
          const message = err?.error?.data?.message;
          ErrorToast(message);
        }
      },
    }),
    getApplications: builder.query({
      query: ({ args, jobId }) => {
        const params = new URLSearchParams();

        if (args !== undefined && args.length > 0) {
          args.forEach((item: IParam) => {
            if (item.value) {
              params.append(item.name, item.value);
            }
          });
        }
        return {
          url: `/jobs/applications?jobId=${jobId}`,
          method: "GET",
          params: params,
        };
      },
      keepUnusedDataFor: 600,
      providesTags: (result, error, arg) => [
        { type: TagTypes.applications, id: arg.jobId },
      ],
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
        } catch (err: any) {
          const message = err?.error?.data?.message;
          ErrorToast(message);
        }
      },
    }),
  }),
});

export const { useGetEmployerJobsQuery, useCreateJobMutation, useGetSingleJobQuery, useUpdateJobMutation, useMakeActiveExpireJobMutation, useGetRecentPostedJobsQuery, useSearchJobsQuery, useGetSingleFindJobQuery, useAddRemoveFavouriteJobMutation, useGetFavouriteJobsQuery, useApplyJobMutation, useGetAppliedJobsQuery, useGetRecentAppliedJobsQuery, useGetApplicationsQuery, useDeleteEmployerJobMutation } = jobApi;
