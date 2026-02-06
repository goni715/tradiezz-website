/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorToast } from "@/helper/ValidationHelper";
import TagTypes from "@/constant/tagType.constant";
import { apiSlice } from "../api/apiSlice";
import { IParam } from "@/types/global.type";

export const chatApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createChat: builder.mutation({
      query: (data) => ({
        url: "/chat/create-chat",
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result) => {
        if (result?.success) {
          return [TagTypes.chats];
        }
        return [];
      },
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
          // SuccessToast("Message is sent successfully");
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
    getChats: builder.query({
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
          url: "/chat/get-chats",
          method: "GET",
          params: params,
        };
      },
      keepUnusedDataFor: 120,
      providesTags: [TagTypes.chats],
    }),
  }),
});

export const { useGetChatsQuery, useCreateChatMutation } = chatApi;
