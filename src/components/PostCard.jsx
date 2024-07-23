import React from 'react'
import appwriteService from '../appwrite/service'
import { Link } from 'react-router-dom'
function PostCard({$id,title,featuredImage}) {

  return (
       
    <div style={{border:"3px solid green",margin:"20px",padding:"20px"}}>
       <div>
       <Link to={`/post/${$id}`}>
       <img src={appwriteService.getFilePreview(featuredImage)} alt={title} style={{width:"100px"}}/>
       </Link> 
       </div>
       <h2>{title}</h2>
    </div>
    
  )
}

export default PostCard