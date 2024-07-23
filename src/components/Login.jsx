import React from 'react'
import {useForm} from 'react-hook-form'
import appwriteAuthentication from '../appwrite/authentication'
import {useDispatch} from 'react-redux'
import { login as authLogin,logout as authLogout} from '../app/authSlice'
import {useNavigate} from 'react-router-dom'
import {Input,Button} from './index'
function Login() {
       const dispatch = useDispatch()
       const navigate = useNavigate()
       const {register,handleSubmit} = useForm()
       const submit = async(data) => {
              // console.log(data)
              try {
                     const session = await appwriteAuthentication.login(data)
                     if(session){
                            const currentUser = await appwriteAuthentication.getCurrentUser()
                            console.log(currentUser)
                            if(currentUser){
                                   dispatch(authLogin(currentUser))
                            }
                            navigate("/")
                     }
                      
              } catch (error) {
                     
              }
       }
  return (
       <div style={{textAlign:"center",display:"flex",justifyContent:"center"}}>
              
    <div style={{border:"5px solid green",margin:"20px",padding:"20px",display:"flex",flexDirection:"column",justifyContent:"center",borderRadius:"20px"}}>
    <div className='text-2xl text-white'>Login page</div><br />
       <form onSubmit={handleSubmit(submit)} style={{textAlign:'center',justifyContent:"center"}}>
              <Input label="Email " type="email" placeholder="Enter your email .. " {...register("email",{required : true})}/>
              <Input label="Password" type="password" placeholder="Enter your password .." {...register("password",{
                     required : true
              })} />
              <Button type='submit'>Submit </Button>
       </form>
    </div>
    </div>
  )
}

export default Login