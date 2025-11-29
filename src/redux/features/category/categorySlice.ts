import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TOption } from "@/types/global.type";

type TInitialState = {
  categorySearchQuery: string;
  categoryStatus: string;
  categoryPageSize: number;
  categoryCurrentPage: number;
  CategoryCreateError: string;
  CategoryUpdateError: string,
  categoryOptions: TOption[]
}

const initialState: TInitialState = {
  categorySearchQuery: "",
  categoryStatus: "",
  categoryPageSize: 1,
  categoryCurrentPage: 1,
  CategoryCreateError: "",
  CategoryUpdateError: "",
  categoryOptions: []
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    SetCategorySearchQuery: (state, action: PayloadAction<string>) => {
      state.categorySearchQuery = action.payload;
    },
    SetCategoryStatus: (state, action: PayloadAction<string>) => {
      state.categoryStatus = action.payload;
    },
    SetCategoryPageSize: (state, action: PayloadAction<number>) => {
      state.categoryPageSize = action.payload;
    },
    SetCategoryCurrentPage: (state, action: PayloadAction<number>) => {
      state.categoryCurrentPage = action.payload;
    },
    SetCategoryCreateError: (state, action: PayloadAction<string>) => {
      state.CategoryCreateError = action.payload;
    },
    SetCategoryUpdateError: (state, action: PayloadAction<string>) => {
      state.CategoryUpdateError = action.payload;
    },
    SetCategoryOptions: (state, action: PayloadAction<TOption[]>) => {
      state.categoryOptions = action.payload;
    }
  },
});

export const {
  SetCategoryCreateError,
  SetCategoryUpdateError,
  SetCategoryOptions
} = categorySlice.actions;

const categorySliceReducer = categorySlice.reducer;
export default categorySliceReducer;
