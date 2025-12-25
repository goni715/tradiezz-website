import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TOption } from "@/types/global.type";

type TInitialState = {
  categoryOptions: TOption[]
}

const initialState: TInitialState = {
  categoryOptions: []
};

const blogCategorySlice = createSlice({
  name: "blogCategory",
  initialState,
  reducers: {
    SetBlogCategoryOptions: (state, action: PayloadAction<TOption[]>) => {
      state.categoryOptions = action.payload;
    }
  },
});

export const {
  SetBlogCategoryOptions
} = blogCategorySlice.actions;

const blogCategorySliceReducer = blogCategorySlice.reducer;
export default blogCategorySliceReducer;
