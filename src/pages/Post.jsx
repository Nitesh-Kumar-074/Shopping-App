import React,{useState,useEffect} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import appwriteService from '../appwrite/service'
import {Button} from '../components/index'
function Post() {
       const navigate = useNavigate()
       const { slug } = useParams()
       const [post,setPost] = useState(null)
       const userData = useSelector((state) => state.authSlice.userData)
       useEffect(() => {
        appwriteService.getPost(slug).then(post => {setPost(post)})
       },[slug,navigate])
       const isAuthor = post && userData  ? post.userId === userData.$id : false

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
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
      <h2 className='text-3xl m-2' style={{color:"red",fontFamily:"cursive"}}>{post.title}</h2>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}} >
      <img src={appwriteService.getFilePreview(post.featuredImage)} alt={post.title} style={{width:"300px",border:"5px solid green",margin:"20px",padding:"10px",borderRadius:"10px"}}/><br/>
     
      </div>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}} >
      <p className='text-2xl' style={{backgroundColor:"white",color:"purple",fontFamily:"cursive",margin:"20px",padding:"10px",width:"400px",border:"2px solid blue"}}>{post.content}</p>
      </div>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}} >
      <div className='m-4 p-4' style={{backgroundColor:"black",color:"greenyellow",border:"4px solid brown",fontSize:"25px",fontFamily:"cursive"}}>Price in rupees :-  {post.price}</div>
      </div>
      <div>{
        !isAuthor && <a href={`mailto:${post.sellerEmail}`} style={{fontSize:"25px",fontFamily:"cursive",color:"cyan"}}>Click here to contact with owner of this product</a>
        }</div>
      {isAuthor && <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}><Button onClick={deleteHandler} backgroundColor="red">Delete</Button></div>}
    </div>
    : null
  )
}

export default Post