
import { ICategory } from "@/types/category.type";
import TagTypes from "../../../constant/tagType.constant";
import { ErrorToast } from "../../../helper/ValidationHelper";
import { apiSlice } from "../api/apiSlice";
import { SetBlogCategoryOptions } from "./blogCategorySlice";

export const blogCategoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlogCategoryDropDown: builder.query({
      query: () => ({
        url: "/blog-category/get-category-drop-down",
        method: "GET",
      }),
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.blogCategoryDropDown],
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          const data = res?.data?.data;
          const options = data?.map((c: ICategory) => ({
            value: c._id,
            label: c.name,
          }))
          dispatch(SetBlogCategoryOptions(options))
        } catch {
          ErrorToast("Something Went Wrong");
        }
      },
    }),
  }),
});

export const { useGetBlogCategoryDropDownQuery } = blogCategoryApi;
