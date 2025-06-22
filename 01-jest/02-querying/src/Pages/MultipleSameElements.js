import React from 'react'

const MultipleSameElements = () => {
  return (
    <div>
      <div>
        <input type='checkbox' id="checkbox1" defaultChecked={true}/>
        <label htmlFor='checkbox1'>Checkbox</label>
      </div>
      <div>
        <input type='checkbox' id="checkbox2" defaultChecked={true}/>
        <label htmlFor='checkbox2'>Checkbox</label>
      </div>
      <div>
        <input type='checkbox' id="checkbox3" defaultChecked={true}/>
        <label htmlFor='checkbox3'>Checkbox</label>
      </div>
    </div>
  )
}

export default MultipleSameElements
