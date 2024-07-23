import React,{useEffect, useState} from 'react'
import appwriteService from '../appwrite/service'
import {PostCard} from './index'
import { useSelector } from 'react-redux'
function Allposts() {
       const [posts, setPosts] = useState([])
       useEffect(() => {
              appwriteService.getAllPosts([]).then((posts) => {
                     if(posts){
                            setPosts(posts.documents)
                     }
              })
       },[])
       const arr = [1,2,3,4]
  return (
    <div className='flex flex-wrap'>
       {/* {
              arr.map((item) => {
                     <div key={item}>
                            <h3 className='text-3xl'>{item}</h3>
                     </div>
              })
       } */}
       {
              posts.map(post => (
                     <div key={post.$id} style={{width:'200px'}}>
                            <PostCard {...post}/>
                            {/* {post} */}
                     </div>
              ))
       }
    </div>
  )
}

export default Allposts