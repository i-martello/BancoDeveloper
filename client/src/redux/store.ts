import { configureStore } from '@reduxjs/toolkit'
import cryptoReducer from './cryptoSlice/cryptoSlice'

export const store = configureStore({
  reducer: {cryptoStore: cryptoReducer }
})