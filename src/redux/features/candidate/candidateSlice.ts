/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICandidateDetails } from '@/types/candidate.type';
import { createSlice } from '@reduxjs/toolkit'

type TInitialState = {
  overview: {
    favoriteJobCount: number;
    applicationCount: number;
    jobAlertCount: number;
    newAlertCount: number;
    recentlyApplied: any[];
  };
  details: ICandidateDetails | null;
};

 const initialState: TInitialState = {
   overview: {
     favoriteJobCount: 0,
     applicationCount: 0,
     jobAlertCount: 0,
     newAlertCount: 0,
     recentlyApplied: [],
   },
   details: null
 };


const candidateSlice = createSlice({
  name: 'candidate',
  initialState: initialState,
  reducers: {
    SetCandidateOverview: (state, action) => {
      state.overview=action.payload
    },
    SetCandidateDetails: (state, action) => {
      state.details=action.payload
    },
  }
})

export const { SetCandidateOverview, SetCandidateDetails } = candidateSlice.actions

const candidateSliceReducer = candidateSlice.reducer;
export default candidateSliceReducer;