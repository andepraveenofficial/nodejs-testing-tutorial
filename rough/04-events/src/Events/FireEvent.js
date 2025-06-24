import { useState } from "react"

const FireEvent = () => {
    const [text, setText] = useState("")
    const [data, setData] = useState("Old Data")
  return (
    <div>
      <div>
        <p>{text}</p>
        <input 
        type="text" 
        placeholder='Enter Your Name' 
        onChange={(e) => setText(e.target.value)}
        value={text}
        />
      </div>
      <div>
        <p>{data}</p>
        <button onClick={()=>setData("New Data")}>Click</button>
      </div>
      
    </div>
  )
}

export default FireEvent
