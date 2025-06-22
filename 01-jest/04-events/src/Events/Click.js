import React, {useState} from 'react'

const Click = () => {
    const [data, setData] = useState("Old Data")
  return (
    <div>
        <p>{data}</p>
      <button onClick={() => setData("New Data")}>Change Data</button>
    </div>
  )
}

export default Click
