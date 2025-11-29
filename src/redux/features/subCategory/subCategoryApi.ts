import TagTypes from "../../../constant/tagType.constant";
import { ErrorToast } from "../../../helper/ValidationHelper";
import type { ICategory } from "../../../types/category.type";
import { apiSlice } from "../api/apiSlice";
import { SetSubCategoryOptions } from "./subCategorySlice";

export const subCategoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSubCategoryDropDownByCategoryId: builder.query({
      query: (categoryId:string) => ({
        url: `/sub-category/get-sub-category-drop-down/${categoryId}`,
        method: "GET",
      }),
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.subCategoryDropDown],
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          const data = res?.data?.data;
          const options = data?.map((c: ICategory) => ({
            value: c._id,
            label: c.name,
          }))
          dispatch(SetSubCategoryOptions(options))
        } catch {
          ErrorToast("Something Went Wrong");
        }
      },
    }),
  }),
});

export const { useGetSubCategoryDropDownByCategoryIdQuery } = subCategoryApi;
