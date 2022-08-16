import React, { useState } from 'react'
import Menu from './Menu'
import Start from './Start'
import blob1 from './assets/blob1.svg'
import blob2 from './assets/blob2.svg'

function App() {
  const [started, setStarted] = useState(false)

  return (
    <div className='main-container'>
      <div className='blob'></div>
      <img className='left' src={blob1} alt="" />
      { started ? <Start /> : <Menu />}
    </div>
    
  )
}

export default App