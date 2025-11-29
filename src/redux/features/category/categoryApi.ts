
import { ICategory } from "@/types/category.type";
import TagTypes from "../../../constant/tagType.constant";
import { ErrorToast } from "../../../helper/ValidationHelper";
import { apiSlice } from "../api/apiSlice";
import { SetCategoryOptions } from "./categorySlice";

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategoryDropDown: builder.query({
      query: () => ({
        url: "/category/get-category-drop-down",
        method: "GET",
      }),
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.categoryDropDown],
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          const data = res?.data?.data;
          const options = data?.map((c: ICategory) => ({
            value: c._id,
            label: c.name,
          }))
          dispatch(SetCategoryOptions(options))
        } catch {
          ErrorToast("Something Went Wrong");
        }
      },
    }),
  }),
});

export const { useGetCategoryDropDownQuery } = categoryApi;
