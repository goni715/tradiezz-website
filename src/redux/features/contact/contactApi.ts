/* eslint-disable @typescript-eslint/no-explicit-any */

import { apiSlice } from "../api/apiSlice";
import { SuccessToast } from "@/helper/ValidationHelper";
import { SetContactError } from "./contactSlice";

export const contactApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createContact: builder.mutation({
      query: (data) => ({
        url: "/contact/create-contact",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          SuccessToast("Message is sent successfully");
        } catch (err: any) {
          const status = err?.error?.status;
          const message = err?.error?.data?.message || "Something Went Wrong";
          if (status === 500) {
            dispatch(SetContactError("Something Went Wrong"));
          }
          else {
            dispatch(SetContactError(message));
          }
        }
      },
    }),
  }),
});

export const { useCreateContactMutation } = contactApi;
