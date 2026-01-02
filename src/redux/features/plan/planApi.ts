
import TagTypes from "../../../constant/tagType.constant";
import type { IParam } from "../../../types/global.type";
import { apiSlice } from "../api/apiSlice";

export const planApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPlans: builder.query({
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
          url: "/plan/get-user-plans",
          method: "GET",
          params: params,
        };
      },
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.plans],
    }),
  }),
});

export const { useGetPlansQuery } = planApi;
