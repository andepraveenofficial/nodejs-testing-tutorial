import React from 'react'

const FunctionProps = ({setData}) => {
  return (
    <div>
        <p>Data</p>
      <button onClick={() => setData("New Data")}>Click</button>
    </div>
  )
}

export default FunctionProps
