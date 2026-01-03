/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorToast } from "@/helper/ValidationHelper";
import TagTypes from "../../../constant/tagType.constant";
import type { IParam } from "../../../types/global.type";
import { apiSlice } from "../api/apiSlice";
import { SetSubscriptionStatus } from "./subscriptionSlice";

export const subscriptionApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSubscriptions: builder.query({
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
          url: "/subscription/get-my-subscriptions",
          method: "GET",
          params: params,
        };
      },
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.subscriptions],
    }),
    checkSubscriptionStatus: builder.query({
      query: () => ({
        url: "/subscription/check-subscription-status",
        method: "GET",
      }),
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.subscriptionStatus],
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          const isActive = res?.data?.data?.isActive;
          dispatch(SetSubscriptionStatus(isActive));
        } catch {
          ErrorToast("Server error is occured");
        }
      },
    }),
    createSubscription: builder.mutation({
      query: (data) => ({
        url: "/subscription/create-subscription",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [ TagTypes.subscriptions ],
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          //SuccessToast("Checkout Session is created Successfully");
          if (res?.data?.data?.url) {
            window.location.href = res?.data?.data?.url;
          }
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
    verifySession: builder.query({
      query: (sessionId) => ({
        url: `/subscription/verify-session?sessionId=${sessionId}`,
        method: "GET",
      }),
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.payments],
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
          //SuccessToast("Payment Successfull");
        } catch {
          ErrorToast("Server error is occured");
        }
      },
    }),
  }),
});

export const { useGetSubscriptionsQuery, useCheckSubscriptionStatusQuery, useCreateSubscriptionMutation, useVerifySessionQuery } =
  subscriptionApi;
