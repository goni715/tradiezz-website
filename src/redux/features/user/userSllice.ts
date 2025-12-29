/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TState = {
  user: any | null;
  isProfileUpdated: boolean;
}

 const initialState: TState = {
  user: null,
  isProfileUpdated: false
 }


const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    SetUser: (state, action) => {
      state.user=action.payload
    },
    SetIsProfileUpdated: (state, action: PayloadAction<boolean>) => {
      state.isProfileUpdated = action.payload;
    },
  }
})

export const { SetUser, SetIsProfileUpdated } = userSlice.actions

const userSliceReducer = userSlice.reducer;
export default userSliceReducer;