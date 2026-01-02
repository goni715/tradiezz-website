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
          dispatch(SetSubscriptionStatus(isActive))
        } catch{
          ErrorToast("Server error is occured");
        }
      },
    }),
  }),
});

export const { useGetSubscriptionsQuery, useCheckSubscriptionStatusQuery } = subscriptionApi;
