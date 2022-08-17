import React, { useState } from 'react'
import Menu from './Menu'
import Start from './Start'
import blob1 from './assets/blob1.svg'

function App() {
  const [started, setStarted] = useState(false)

  function start(){
    setStarted(x => !x)
    console.log(started)
  }

  return (
    <div className='main-container'>
      <div className='content-container'>
        { started ? 
         <Start 
          
         /> 
         : 
         <Menu 
         start={start}
         />}
      </div>
      
      <div className='blob1'>
        <img className='left' src={blob1} alt="" />
      </div>
      
      
    </div>
    
  )
}

export default App