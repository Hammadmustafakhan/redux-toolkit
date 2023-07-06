import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../src/redux/features/counter/counterSlice'

export const Store = configureStore({
  reducer: {
    counter: counterSlice,
  },
})