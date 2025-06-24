import React, { useState } from 'react'
import User from './Components/User'
import FunctionProps from './Components/FunctionProps'

const App = () => {
  const [data, setData] = useState("Old Data")
  return (
    <div>
      <h1>Props Testing</h1>
      <User name="Ande Praveen"/>
      <FunctionProps setData={setData}/>
    </div>
  )
}

export default App
