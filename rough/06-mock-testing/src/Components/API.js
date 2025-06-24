import React, { useEffect, useState } from 'react'

const API = () => {
    const [data, setData] = useState([])

    const getData = async () => {
        let url = "https://jsonplaceholder.typicode.com/users"
        let result = await fetch(url)
        result = await result.json()
        console.log(result)
        setData(result)
    }

    useEffect(() => {
        getData()
    }, [])

  return (
    <div>
      <h1>API Call</h1>
      <ul>
        {data.map((item) => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  )
}

export default API
