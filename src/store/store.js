import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { journallSlice } from './journall/journallSlice'

export const store = configureStore({
  reducer: {
    auth:authSlice.reducer,
    journall:journallSlice.reducer
  },
})
