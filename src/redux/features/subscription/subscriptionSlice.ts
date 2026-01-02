import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TInitialState = {
    isActive : boolean
}

const initialState: TInitialState = {
  isActive: false
}

export const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {
    SetSubscriptionStatus: (state, action: PayloadAction<boolean>) => {
      state.isActive=action.payload;
    }
  },
})

export const { SetSubscriptionStatus } = subscriptionSlice.actions;

const subscriptionSliceReducer = subscriptionSlice.reducer;
export default subscriptionSliceReducer;