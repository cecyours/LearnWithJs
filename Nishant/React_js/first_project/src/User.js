import React , {useState} from 'react'

export default function User() {
    const [data, setData] = useState("Nishant")
    function apple(){
        setData('Golani')
    }
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={apple}>Last Name</button>
    </div>
  )
}

