import React,{useId} from 'react'
import {Input,Button} from './index.js'
import { useForm } from 'react-hook-form'
import appwriteService from '../appwrite/service'
import { useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'

function PostForm() {
       const id2 = useId()
       const userData = useSelector(state => state.authSlice.userData)
       // console.log(userData)
       const {register,handleSubmit} = useForm()
       const navigate = useNavigate()
       function getSlug(str){
              return str.trim().toLowerCase().replace(/[^a-zA-Z\d\s]+/g, "-")
              .replace(/\s/g, "-");
       }
       const submit = async (data) => {
              data.sellerEmail = userData.email;
              data.userId = userData.$id;
              data.price = parseFloat(data.price2)
              if(data.title){
              slug2 = getSlug(data.title) + id2
              data.slug = slug2;
              }
              else{
                     data.slug = "I-wish-there-was-a-slug"
              }
              const file = await appwriteService.uploadFile(data.image[0]);
              if(file)
              data.featuredImage = file.$id
              // data.featuredImage = "https://cloud.appwrite.io/v1/storage/buckets/669d300a0027d845d3b7/files/669f952700131624ecdd/view?project=669d2991001a2f6a72b9&mode=admin"
              // console.log(data)
              const postInDb = await appwriteService.createPost({...data})
              console.log(`Post form data :`)
              console.log(data)
              console.log(`Userdata received from store `)
              console.log(userData.data)
              // console.log(postInDb)
              if(postInDb){
                     navigate(`/post/${postInDb.$id}`)
              }
              else{
                     alert("Your post was not created")
                     navigate("/")
              }
       };

       // we need to send slug 
  return (
       <div style={{textAlign:"center",display:"flex",justifyContent:"center"}}>
    <div style={{border:"5px solid green",margin:"20px",padding:"20px",display:"flex",justifyContent:"center",borderRadius:"20px"}}>
       <form onSubmit={handleSubmit(submit)}>
              <Input label = "Title " placeholder="Enter title" {...register("title",{
                     required : true
              })}/>
              <Input label = "Content" placeholder="Write something about the product " {...register("content",{
                     required: true
              })} />
              <Input type="file" accept="image/jpg, image/png, image/jpeg, image/gif" label="Image" placeholder="Choose image"
              {...register("image",{
                     required : true
              })}
              />
              <Input type="number" label="Price " step="0.01" placeholder="Enter price " {...register("price2",{required : true})} />
              <Button type='submit'>Submit</Button>
       </form>
    </div>
    </div>
  )
}

export default PostForm