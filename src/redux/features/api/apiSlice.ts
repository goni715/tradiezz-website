/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "@/helper/SessionHelper";
import { ErrorToast } from "@/helper/ValidationHelper";
import TagTypes from "@/constant/tagType.constant";
import { ApiError } from "@/types/global.type";
import { SetLoginError } from "../auth/authSlice";

export const baseUrl = "https://backend.machmakers.co.uk";
// export const baseUrl = "http://10.0.60.118:5004"

const baseQuery = fetchBaseQuery({
  //baseUrl: "http://24.199.120.27:5004", //http://10.0.60.118
  baseUrl: baseUrl,
  prepareHeaders: async (headers) => {
    if (getToken()) {
      headers.set("Authorization", `Bearer ${getToken() as string}`);
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
      if (error?.data?.message === "Please activate your account then try to login") {
        api.dispatch(SetLoginError(error?.data?.message))
      }
      else {
        localStorage.clear();
        //ErrorToast("Authorization Expired");
        window.location.href = "/login";
      }
    }
    return result;
  },
  tagTypes: Object.values(TagTypes), //TagS WhiteLists
  endpoints: (_builder) => ({}),
});
