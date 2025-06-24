import React from 'react'
import Validation from './Components/Validation'
import QueryTypes from './Components/QueryTypes'
import Find from './Components/Find'
import CustomQuery from './Components/CustomQuery'

const App = () => {
  return (
    <div>
      <Validation/>
      <hr/>

      <QueryTypes/>
      <hr/>

      <Find/>
      <hr/>

      <CustomQuery/>
      <hr/>
    </div>
  )
}

export default App
