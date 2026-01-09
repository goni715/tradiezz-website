import { apiSlice } from "../api/apiSlice";
import TagTypes from "@/constant/tagType.constant";

export const dashboardApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEmployerStats: builder.query({
      query: () => {
        return {
          url: `/dashboard/get-employer-stats`,
          method: "GET",
        };
      },
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.employerStats],
    }),
    getCandidateStats: builder.query({
      query: () => {
        return {
          url: `/dashboard/get-candidate-stats`,
          method: "GET",
        };
      },
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.candidateStats],
    }),
  }),
});

export const { useGetEmployerStatsQuery, useGetCandidateStatsQuery } = dashboardApi;
