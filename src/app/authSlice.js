import {createSlice} from '@reduxjs/toolkit'

const initialState = {
       status : false,
       userData : null
}

export const authSlice = createSlice({
       name : "authSlice",
       initialState,
       reducers: {
              login : (state,action) => {
                     state.status = true
                     state.userData = action.payload
                     console.log("In authSlice :- ")
                     console.log(state.userData)
                     console.log(action.payload)
              },
              logout : (state) => {
                     state.status = false
                     state.userData = null
              }
       }
})

export const {login,logout} = authSlice.actions

export default authSlice.reducer