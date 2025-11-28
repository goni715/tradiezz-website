import { configureStore } from '@reduxjs/toolkit'
import jobSliceReducer from '../features/job/jobSlice'
import categorySliceReducer from '../features/category/categorySlice'
import authSliceReducer from '../features/auth/authSlice'
import userSliceReducer from '../features/user/userSllice'
import candidateSliceReducer from '../features/candidate/candidateSlice'
import { apiSlice } from '../features/api/apiSlice'


export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    job: jobSliceReducer,
    category: categorySliceReducer,
    auth: authSliceReducer,
    user: userSliceReducer,
    candidate: candidateSliceReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch