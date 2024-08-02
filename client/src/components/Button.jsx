import React, { useState } from 'react'

function Button() {
    const [buttonFav, setButtonFav]=useState(false)
    const butFunction =()=>{
       if (setButtonFav===true){
        <>
        <button />
        </>
       }
    }

  return (
    <>
    <button onClick={butFunction}></button>
    </>
  )
}

export default Button