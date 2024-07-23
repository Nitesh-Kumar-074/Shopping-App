import React,{useState} from 'react'
import appwriteService from '../appwrite/service'
import {PostCard} from './index'
import { useSelector } from 'react-redux'
function Dashboard() {
       const ownerId = useSelector(state => state.authSlice.currentUser.userData.$id)
       const [posts,setPosts] = useState()
       appwriteService.getPostsOfCurrentUser(ownerId).then(posts => setPosts(posts))
  return (
    <div>
       <h3 className='text-3xl block'>Your posts :- </h3>
       <div className='flex flex-wrap'>
       {
              posts?.map((post) => (
                     <div key={post.$id}>
                            <PostCard {...post}/>
                     </div>
              ))
       }
       </div>
    </div>
  )
}

export default Dashboard