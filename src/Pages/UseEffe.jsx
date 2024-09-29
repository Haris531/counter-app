import React, { useEffect, useState } from 'react'

const UseEffe = () => {

    const [num, setnum] =useState(0);
    const incNum = () =>{
        setnum(num + 1);
    }
    useEffect(()=>{
        console.log('the number is :' , num);
    },[num]);

  return (
    <div className='flex flex-col justify-center items-center'>
    <p className='text-3xl'>you clicked {num} time</p>
    <button onClick={incNum} className='bg-slate-500 text-xl mt-4'>Click me</button>
 
    </div>
  )
}
export default UseEffe