import React,{useId} from 'react'
function Input({
       type = "text",
       label,
       ...props
},ref) {
       const id = useId()
  return (
    <div className='flex flex-wrap'>
       {label && <label htmlFor={id} style={{color : "cyan",fontFamily:"cursive",fontSize:"20px"}}>{label}</label>}
       <input type={type} id={id} {...props} ref={ref} className='m-4 p-2 text-black rounded-lg'/>
    </div>
  )
}

export default React.forwardRef(Input)