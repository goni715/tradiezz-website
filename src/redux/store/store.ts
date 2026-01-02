import { configureStore } from '@reduxjs/toolkit'
import jobSliceReducer from '../features/job/jobSlice'
import categorySliceReducer from '../features/category/categorySlice'
import authSliceReducer from '../features/auth/authSlice'
import userSliceReducer from '../features/user/userSllice'
import candidateSliceReducer from '../features/candidate/candidateSlice'
import { apiSlice } from '../features/api/apiSlice'
import subCategorySliceReducer from '../features/subCategory/subCategorySlice'
import contactSliceReducer from '../features/contact/contactSlice'
import blogCategorySliceReducer from '../features/blogCategory/blogCategorySlice'
import subscriptionSliceReducer from '../features/subscription/subscriptionSlice'


export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    job: jobSliceReducer,
    category: categorySliceReducer,
    subCategory: subCategorySliceReducer,
    auth: authSliceReducer,
    user: userSliceReducer,
    candidate: candidateSliceReducer,
    contact: contactSliceReducer,
    blogCategory: blogCategorySliceReducer,
    subscription: subscriptionSliceReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch