import React, { useEffect, useState } from 'react'

const Find = () => {
    const [data, setData] = useState(false)

    useEffect(()=>{
        setTimeout(()=>setData(true), 2000)
    }, [])
  return (
    <div>
      Find
      {data ? <h2>Data Found</h2> : <h2>Data NotFound</h2>}
    </div>
  )
}

export default Find
