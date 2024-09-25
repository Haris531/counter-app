import React, { useEffect, useState } from 'react'

const UseEffe = () => {

    const [num, setnum] =useState(0);
    const incNum = () =>{
        setnum(num + 1);
    }
    useEffect(()=>{
        // alert("i am clicked")
    });

  return (
    <>
    <p className='text-3xl'>you clicked {num} time</p>
    <button onClick={incNum} className='bg-slate-500 text-xl mt-4'>Click me</button>
 
    </>
  )
}

export default UseEffe