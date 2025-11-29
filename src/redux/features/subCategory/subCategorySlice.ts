import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TOption } from "@/types/global.type";

type TInitialState = {
  subCategoryCreateError: string;
  subCategoryUpdateError: string,
  subCategoryOptions: TOption[]
}

const initialState: TInitialState = {
  subCategoryCreateError: "",
  subCategoryUpdateError: "",
  subCategoryOptions: []
};

const subCategorySlice = createSlice({
  name: "subCategory",
  initialState,
  reducers: {
    SetSubCategoryCreateError: (state, action: PayloadAction<string>) => {
      state.subCategoryCreateError = action.payload;
    },
    SetSubCategoryUpdateError: (state, action: PayloadAction<string>) => {
      state.subCategoryUpdateError = action.payload;
    },
    SetSubCategoryOptions: (state, action: PayloadAction<TOption[]>) => {
      state.subCategoryOptions = action.payload;
    }
  },
});

export const {
  SetSubCategoryCreateError,
  SetSubCategoryUpdateError,
  SetSubCategoryOptions
} = subCategorySlice.actions;

const subCategorySliceReducer = subCategorySlice.reducer;
export default subCategorySliceReducer;
