import { TAppliedJob, TEmployerJob } from '@/types/job.type'
import { createSlice } from '@reduxjs/toolkit'

interface TInitialState {
  viewApplication: boolean,
  recentJobs: TEmployerJob[],
  recentAppliedJobs: TAppliedJob[]
}

const initialState: TInitialState = {
  viewApplication: true,
  recentJobs: [],
  recentAppliedJobs: []
}

export const applicationSlice = createSlice({
  name: 'application',
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

export const { SetViewApplication, SetRecentJobs, SetRecentAppliedJobs } = applicationSlice.actions;
const applicationSliceReducer = applicationSlice.reducer;
export default applicationSliceReducer;