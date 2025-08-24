/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit'

type TState = {
  user: any | null
}

 const initialState: TState = {
  user: null
 }


const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    SetUser: (state, action) => {
      state.user=action.payload
    },
  }
})

export const { SetUser } = userSlice.actions

const userSliceReducer = userSlice.reducer;
export default userSliceReducer;