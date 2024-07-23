import {configureStore} from '@reduxjs/toolkit'
import authSliceReducer from './authSlice.js'
export const store = configureStore({
       reducer : {
              authSlice :  authSliceReducer,
       }
})