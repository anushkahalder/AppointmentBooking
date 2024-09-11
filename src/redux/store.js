
import { configureStore } from '@reduxjs/toolkit'
import bookingReducer from '../bookingd/bookingSlice'


export const store = configureStore({
  reducer: {
    booking: bookingReducer,
  },
})