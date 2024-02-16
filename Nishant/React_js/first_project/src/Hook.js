import React, { useEffect, useState } from 'react'

export default function Hook() {
    const[count, setcount] = useState(0);
    useEffect(()=>{
        console.log("Work 1");
    })
  return (
    <div>
        <h1>useEffect in react {count}</h1>
        <button onClick={()=> setcount(count+1)}>Click Me</button>
    </div>
  )
}
