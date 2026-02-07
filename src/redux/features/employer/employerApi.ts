import TagTypes from "@/constant/tagType.constant";
import { apiSlice } from "../api/apiSlice";

export const employerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSingleEmployer: builder.query({
      query: (id) => ({
        url: `/user/get-single-employer/${id}`,
        method: "GET",
      }),
      keepUnusedDataFor: 600,
      providesTags: (result, error, arg) => [
        { type: TagTypes.employer, id: arg },
      ],
      // async onQueryStarted(_arg, { queryFulfilled }) {
      //   try {
      //     await queryFulfilled;
      //   } catch (err: any) {
      //     ErrorToast("Server error is occured");
      //   }
      // },
    }),
  }),
});

export const { useGetSingleEmployerQuery } = employerApi;
