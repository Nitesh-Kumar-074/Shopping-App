import React from 'react'

function Button({
       children,
       type = "button",
       ...props
}) {
  return (
    <button type={type} {...props} style={{backgroundColor:'green',margin:"10px 20px",padding:"10px",color:"white",border:"2px solid green",borderRadius:"5px",}} className='hover : bg-blue-400'>
       {children}
    </button>
  )
}

export default Button