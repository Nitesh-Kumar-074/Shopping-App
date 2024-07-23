import React from 'react'
import {Button} from '../index.js'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import appwriteAuthentication from '../../appwrite/authentication.js'
import {logout as authLogout} from '../../app/authSlice.js'

function LogoutBtn() {
       const dispatch =useDispatch()
       const navigate = useNavigate()
       const logoutHandler = () => {
              appwriteAuthentication.logout().then(
                     dispatch(authLogout())
              ) 
              navigate('/')
       }
  return (
    <Button onClick={logoutHandler}>
       Logout 
    </Button>
  )
}

export default LogoutBtn