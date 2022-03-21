import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/cars/UseSlice'

export default configureStore({
  reducer: {
    user: userReducer,
  },
})