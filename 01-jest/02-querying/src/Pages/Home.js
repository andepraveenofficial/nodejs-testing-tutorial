import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>Heading1</h1>
      <div role="container">Container</div>

      <label htmlFor="text">Enter Your Name</label>
      <input type="text" placeholder='Enter Your Name' id="text" defaultValue="Ande Praveen"/>

      <img src="../Assets/image.jpg" alt="photo" title="photo"/>
      <span data-testid="span-element">Inline</span>

      <label htmlFor="password">Password</label>
      <input type="password" id="password"/>

    </div>
  )
}

export default Home
