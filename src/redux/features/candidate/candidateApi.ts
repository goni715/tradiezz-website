/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import TagTypes from "@/constant/tagType.constant";
import { apiSlice } from "../api/apiSlice";
import { ErrorToast, SuccessToast } from "@/helper/ValidationHelper";
import { SetCandidateOverview } from "./candidateSlice";
import { IParam } from "@/types/global.type";


export const candidateApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCandidateOverview: builder.query({
      query: () => ({
        url: "/jobs/candidate_overview",
        method: "GET",
      }),
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.candidateOverview],
      async onQueryStarted(_arg, { queryFulfilled, dispatch}) {
        try {
          const res = await queryFulfilled;
          const data = res?.data?.data;
          dispatch(SetCandidateOverview(data))
        } catch (err:any) {
         ErrorToast("Server error is occured");
        }
      },
    }), 
    searchCandidates: builder.query({
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
          url: "/jobs/search_candidate",
          method: "GET",
          params: params,
        };
      },
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.candidates],
    }),
    getSingleCandidate: builder.query({
      query: (id) => ({
        url: `/jobs/get_user_profile_details/${id}`,
        method: "GET",
      }),
      keepUnusedDataFor: 600,
      providesTags: (result, error, arg) =>[ {type: TagTypes.candidate, id:arg} ],
      async onQueryStarted(_arg, { queryFulfilled}) {
        try {
          await queryFulfilled;
        } catch (err:any) {
         ErrorToast("Server error is occured");
        }
      },
    }),
    getFavouriteCandidates: builder.query({
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
          url: "/jobs/get_favorites_user_list",
          method: "GET",
          params: params,
        };
      },
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.favouriteCandidates],
    }),
    addRemoveFavouriteCandidate: builder.mutation({
      query: (id) => ({
        url: `/jobs/toggle_user_favorite/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: (result, error, arg) => {
        if (result?.success) {
          return [TagTypes.candidates, TagTypes.favouriteCandidates, {type: TagTypes.candidate, id: arg}];
        }
        return [];
      },
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          const msg = res?.data?.message;
          SuccessToast(msg);
        } catch (err:any) {
          const message = err?.error?.data?.message;
          ErrorToast(message)
        }
      },
    }),
    sendAccessRequest: builder.mutation({
      query: (id) => ({
        url: `/jobs/profile_access_request/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: (result, error, arg) => {
        if (result?.success) {
          return [TagTypes.candidates, {type: TagTypes.candidate, id: arg}];
        }
        return [];
      },
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          const msg = res?.data?.message;
          SuccessToast(msg);
        } catch (err:any) {
          const message = err?.error?.data?.message;
          ErrorToast(message)
        }
      },
    }),
    uploadCV: builder.mutation({
      query: (data) => ({
        url: `/auth/candidate_resume_upload`,
        method: "PATCH",
        body: data
      }),
      invalidatesTags: (result, error, arg) => {
        if (result?.success) {
          return [TagTypes.candidates, TagTypes.favouriteCandidates, {type: TagTypes.candidate, id: arg}];
        }
        return [];
      },
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          const msg = res?.data?.message;
          SuccessToast(msg);
        } catch (err:any) {
          const message = err?.error?.data?.message;
          ErrorToast(message)
        }
      },
    }),
  }),
});


export const { useGetCandidateOverviewQuery, useSearchCandidatesQuery, useGetSingleCandidateQuery, useAddRemoveFavouriteCandidateMutation, useSendAccessRequestMutation, useGetFavouriteCandidatesQuery, useUploadCVMutation } = candidateApi;