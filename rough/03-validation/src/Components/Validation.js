import React from 'react'

const Validation = () => {
  return (
    <div>
      <div className='username-container'>
        <label htmlFor='username' >Username</label>
        <input type='text' id="username" data-testid="username" className='text-input' defaultValue="Ande Praveen"/>
      </div>
      <div>
        <button className='btn'>Click Me</button>
      </div>
      <div>
        <h1>Heading1</h1>
      </div>
    </div>
  )
}

export default Validation
