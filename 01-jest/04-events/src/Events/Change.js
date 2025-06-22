import React, {useState} from 'react'

const Change = () => {
    const [data, setData] = useState("")
  return (
    <div>
        <label>{data}</label>
      <input type='text' placeholder='Enter Your Name' onChange={(e) => setData(e.target.value)}/>
    </div>
  )
}

export default Change
