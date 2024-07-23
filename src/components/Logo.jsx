import React from 'react'
import {useNavigate,Link} from 'react-router-dom'
import {Button} from './index'
function Logo() {
      //  const navigate = useNavigate()
  return (
    <div style={{width:"50px"}}>
      <Link to='/' >
      <img src='/images/Logo2.jpg' style={{width:"100px"}} />
      </Link>
    </div>
  )
}

export default Logo