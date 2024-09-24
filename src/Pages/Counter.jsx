import React, { useState } from 'react'

const Counter = () => {
    const [num, setnum] =useState(0);

    const incNum = () =>{
        setnum(num + 1);
    }
    const decNum = () =>{
        if (num > 0){
        setnum(num - 1);
        }else{
            alert('sorry cannot go below zero ')
            setnum(0);
        }
    };


  return (
    <div className="flex justify-center items-center h-screen bg-gray-400">
      <div className="w-72 h-80 bg-white flex flex-col justify-center items-center rounded-lg text-center">
        <h1 className="text-3xl w-72 bg-slate-500 font-bold mb-4">{num}</h1>
        <div className="flex justify-evenly mt-8">
          <button onClick={incNum} className="px-4 py-2 mr-6 bg-blue-400 text-white rounded hover:bg-blue-600">Increment</button>
          <button onClick={decNum} className="px-4 py-2 bg-green-400 text-white rounded hover:bg-green-600">Decrement</button>
        </div>
      </div>
    </div>
  )
}

export default Counter