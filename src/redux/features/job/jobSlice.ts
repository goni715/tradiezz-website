import { TAppliedJob, TEmployerJob } from '@/types/job.type'
import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface TJobState {
  viewApplication: boolean,
  recentJobs: TEmployerJob[],
  recentAppliedJobs: TAppliedJob[]
}

// Define the initial state using that type
const initialState: TJobState = {
  viewApplication: true,
  recentJobs: [],
  recentAppliedJobs: []
}

export const jobSlice = createSlice({
  name: 'job',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    SetViewApplication: (state, action) => {
      state.viewApplication = action.payload
    },
    SetRecentJobs: (state, action) => {
      state.recentJobs = action.payload
    },
    SetRecentAppliedJobs: (state, action) => {
      state.recentAppliedJobs = action.payload
    },
  },
})

export const { SetViewApplication, SetRecentJobs, SetRecentAppliedJobs } = jobSlice.actions;
const jobSliceReducer = jobSlice.reducer;
export default jobSliceReducer;