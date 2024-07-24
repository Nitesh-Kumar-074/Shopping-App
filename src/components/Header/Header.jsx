import React from 'react'
import { useSelector } from 'react-redux'
import {useNavigate } from 'react-router-dom'
import {Button,LogoutBtn,Logo} from '../index'

function Header() {
       const navigate = useNavigate(); 
       const authStatus = useSelector(state => state.authSlice.status)
       const navItems = [
              {
                     name : "Home",
                     slug : "/",
                     active : true,
              },
              {
                     name : "Login",
                     slug : "/login",
                     active : !authStatus
              },
              {
                     name : "Signup",
                     slug : "/signup",
                     active : !authStatus
              },
              {
                     name : "Allposts",
                     slug : "/all-posts",
                     active : authStatus
              },
              {
                     name : "Addpost",
                     slug : "/add-post",
                     active : authStatus
              },
              {
                     name : "Your-Posts",
                     slug : "/your-posts",
                     active : false  // I wish i could add you
              },
              {
                     name: "Help",
                     slug : '/help',
                     active : true
              }
       ]
  return (
       <div>
              <Logo/>
              <nav className='inline-block m-3 rounded-lg bg-green-300 min-w-full'>
                     
                     <ul className='flex flex-wrap '>
                            
                            {
                                   navItems.map((item) => item.active ? 
                                   <li key={item.name}>
                                          <Button onClick={() => navigate(item.slug)}>{item.name}</Button>
                                   </li>
                                   : null)
                            }
                            {authStatus && <li>
                                   <LogoutBtn/>
                            </li>}
                     </ul>
              </nav>
       </div>
  )
}

export default Header