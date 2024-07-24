import React from 'react'
import {Input,Button} from './index'
import {useForm} from 'react-hook-form'
import appwriteAuthentication from '../appwrite/authentication'
import { useDispatch } from 'react-redux'
import { login as authLogin, logout as authLogout } from '../app/authSlice'
import { useNavigate } from 'react-router-dom'

function Signup() {
       const {register,handleSubmit} = useForm()
       const navigate = useNavigate()
       const dispatch = useDispatch()
       const submit = async (data) => { 
              const session = await appwriteAuthentication.createAccount(data);
              if(session){
                     const userData = await appwriteAuthentication.getCurrentUser()
                     if(userData){
                            dispatch(authLogin(userData))
                     }
                     else{
                            alert("Your account has been created successfully, but an error occured while login automatically.Please LOGIN")
                     }
                     navigate('/')
              }
       }
  return (
       <div style={{textAlign:"center",display:"flex",justifyContent:"center"}}>
    <div style={{border:"5px solid green",margin:"20px",padding:"20px",display:"flex",flexDirection:"column",justifyContent:"center",borderRadius:"20px"}}>
    <div className='text-2xl text-white'>Signup page</div><br />
       <form onSubmit={handleSubmit(submit)}>
              <Input label="Name " placeholder="Enter your full name " {...register("name",{
                     required : true
              })} />
              <Input label="Email " type="email" placeholder="Enter your email " {...register("email",{
                     required : true
              })}/>
              <Input label="Password " type="password" placeholder="minimum length :- 8" {...register("password",{
                     required : true
              })}/>
              <Button type='submit'>Submit</Button>
       </form>
    </div>
    </div>
  )
}

export default Signup