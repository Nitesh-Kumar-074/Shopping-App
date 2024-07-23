import { useState,useEffect } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import appwriteAuthentication from './appwrite/authentication'
import {useDispatch} from 'react-redux'
import {login as authLogin,logout as authLogout} from './app/authSlice.js'
function App() {
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    appwriteAuthentication.getCurrentUser().then(data => {
      if(data)
      dispatch(authLogin({data}))
      else
      dispatch(authLogout())
    })
    .finally(() => {setLoading(false)})
  },[])

  return (
    loading ? null : <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
    
  )
}

export default App
