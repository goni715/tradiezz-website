/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "@/helper/SessionHelper";
import TagTypes from "@/constant/tagType.constant";
import { ApiError } from "@/types/global.type";
import { BASE_URL } from "@/constant/global.constant";
import { ErrorToast } from "@/helper/ValidationHelper";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: async (headers) => {
    if (getToken()) {
      headers.set("Authorization", `${getToken() as string}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    const error = result?.error as ApiError;
    if (error?.status === 401) {
      localStorage.clear();
      ErrorToast("Session expired. Please log in again.");
      window.location.href = "/";
    }
    return result;
  },
  tagTypes: Object.values(TagTypes), //TagS WhiteLists
  endpoints: (_builder) => ({}),
});
