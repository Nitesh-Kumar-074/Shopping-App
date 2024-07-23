import React from 'react'

function Help() {
  return (
       <div style={{display:"flex",justifyContent:"center"}}>
    <div style={{color:"cyan",fontFamily:'initial',fontSize:"20px",width:"600px",textAlign:"left",border:"5px solid green",margin:"20px",padding:"30px",borderRadius:"20px"}}>
              This website is very simple to use.<br/><br/>
              1. If you have an account go to <strong>Login page</strong> and login.
                     Else you can create a new account by going to <strong>Signup page</strong>.<br/><br/>
              2. Go to <strong>Add post</strong> if you want to create a new post.
                 Once you have been added a post you can delete that post.<br/><br/>
              3. You can view all posts  by visiting <strong>All-posts</strong> page.<br/><br/>
              4. If you click on any item you will get more information about that product e.g. Price, Content about the product
                 and you can simply contact the owner if you are not the owner.<br/><br/>
    </div>
    </div>
  )
}

export default Help