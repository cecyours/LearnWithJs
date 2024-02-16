import React ,{useState} from 'react'

export default function Input() {
    const [value, setvalue] = useState("");
    const [print, setprint] =useState(false);
    function getData(val){
        setvalue(val.target.value);
        setprint(false);
    }

  return (
    <div>
      <input type="text" onChange={getData} />
      <button onClick={()=>setprint(true)}>Print Data</button>
      <h3>
       { print?value:null}
      </h3>
    </div>
  )
}
