import React from 'react'

const QueryTypes = () => {
    let login = false;
  return (
    <div>
      <div>
        <h1>Test Hidden Elements with queryBy & queryAllBy</h1>
      {login ? <button>Logout</button> : <button>Login</button>}
      </div>
    </div>
  )
}

export default QueryTypes
