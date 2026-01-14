/* eslint-disable @typescript-eslint/no-explicit-any */

import TagTypes from "@/constant/tagType.constant";
import { apiSlice } from "../api/apiSlice";
import { ErrorToast, SuccessToast } from "@/helper/ValidationHelper";
import { IParam } from "@/types/global.type";
import { SetRecentAppliedJobs } from "./applicationSlice";

export const applicationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
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
          url: "/application/get-applied-jobs",
          method: "GET",
          params: params,
        };
      },
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.appliedJobs],
    }),
    getAppliedJobIds: builder.query({
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
          url: "/application/get-applied-job-ids",
          method: "GET",
          params: params,
        };
      },
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.appliedJobIds],
    }),
    getApplications: builder.query({
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
          url: `/application/get-applications`,
          method: "GET",
          params: params,
        };
      },
      keepUnusedDataFor: 600,
      providesTags: (result, error, arg) => [
        { type: TagTypes.applications, id: arg.jobId },
      ],
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (err: any) {
          const message = err?.error?.data?.message;
          ErrorToast(message);
        }
      },
    }),
    getApplicationsByJobId: builder.query({
      query: ({ args, jobId}) => {
        const params = new URLSearchParams();
        if (args !== undefined && args.length > 0) {
          args.forEach((item: IParam) => {
            if (item.value) {
              params.append(item.name, item.value);
            }
          });
        }
        return {
          url: `/application/get-applications/${jobId}`,
          method: "GET",
          params: params,
        };
      },
      keepUnusedDataFor: 600,
      providesTags: (result, error, arg) => [
        { type: TagTypes.applicationsByJobId, id: arg.jobId },
      ],
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (err: any) {
          const message = err?.error?.data?.message;
          ErrorToast(message);
        }
      },
    }),
    applyJob: builder.mutation({
      query: (data) => ({
        url: `/application/apply-job`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result) => {
        if (result?.success) {
          return [
            TagTypes.appliedJobs,
            TagTypes.recentAppliedJobs,
            TagTypes.me,
          ];
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
  }),
});

export const {
  useGetAppliedJobsQuery,
  useGetApplicationsQuery,
  useGetApplicationsByJobIdQuery,
  useGetAppliedJobIdsQuery,
  useApplyJobMutation
} = applicationApi;
