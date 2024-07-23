import React,{useState,useEffect} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import appwriteService from '../appwrite/service'
import {Button} from '../components/index'
function Post() {
       const navigate = useNavigate()
       const { slug } = useParams()
       const [post,setPost] = useState(null)
       const userData = useSelector((state) => state.authSlice.currentUser.userData)
       useEffect(() => {
        appwriteService.getPost(slug).then(post => {setPost(post)})
       },[slug,navigate])
       const isAuthor = post && userData && userData.data ? post.userId === userData.data.$id : false

       const deleteHandler = () => {
        appwriteService.deletePost(slug).then(status => {
          if(status){
            appwriteService.deleteFile(post.featuredImage)
            navigate("/")
          }
        })
       }

  return (
    post ? 
    <div>
      <h2 className='text-3xl'>{post.title}</h2>
      <img src={appwriteService.getFilePreview(post.featuredImage)} alt={post.title} style={{width:"500px"}}/><br/>
      <p className='text-2xl cursive'>{post.content}</p>
      <div className='m-4 p-4' style={{backgroundColor:"black",color:"greenyellow",border:"4px solid brown"}}>Price in rupees {post.price}</div>
      <div>{
        !isAuthor && <a href={`mailto:${post.sellerEmail}`} style={{fontSize:"25px",fontFamily:"cursive",color:"cyan"}}>Click here to contact with owner of this product</a>
        }</div>
      {isAuthor && <Button onClick={deleteHandler}>Delete</Button>}
    </div>
    : null
  )
}

export default Post