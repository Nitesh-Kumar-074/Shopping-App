import {createSlice} from '@reduxjs/toolkit'

const initialState = {
       currentUser : {status : false,userData : null}
}

export const authSlice = createSlice({
       name : "authSlice",
       initialState,
       reducers: {
              login : (state,action) => {
                     state.currentUser.status = true
                     state.currentUser.userData = action.payload
              },
              logout : (state) => {
                     state.currentUser.status = false
                     state.currentUser.userData = null
              }
       }
})

export const {login,logout} = authSlice.actions

export default authSlice.reducer