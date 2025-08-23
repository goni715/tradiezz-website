import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryOptions: [
    {
        label: "Category One",
        value: "category one"
    },
    {
        label: "Category Two",
        value: "category two"
    }
  ],
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    SetCategoryOptions: (state, action) => {
      state.categoryOptions=action.payload;
    }
  },
})

export const { SetCategoryOptions } = categorySlice.actions

const categorySliceReducer = categorySlice.reducer;
export default categorySliceReducer;