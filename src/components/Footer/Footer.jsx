import React from 'react'

function Footer() {
  return (
    <div style={{borderTop: "5px solid black",fontSize:"25px"}}>
      This is a web application created using various tools :- HTML, CSS, Javascript, React, Tailwind. <br/>
      This website uses appwrite for backend.
      <div className='text-2xl text-white'>copyright reserved</div>
    </div>
  )
}

export default Footer