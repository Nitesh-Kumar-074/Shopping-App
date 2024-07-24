import React from 'react'

function Button({
       children,
       type = "button",
       backgroundColor = 'green',
       ...props
}) {
  return (
    <button type={type} {...props} style={{backgroundColor:backgroundColor,margin:"10px 20px",padding:"10px",color:"white",border:"2px solid green",borderRadius:"5px"}} >
       {children}
    </button>
  )
}

export default Button