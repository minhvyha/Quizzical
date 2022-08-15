import React from 'react'
import Menu from './Menu'
import Start from './Start'
import left from './assets/left.png'
import right from './assets/right.png'

function App() {
  return (
    <div className='main-container'>
      <img className='left-img' src={left} alt="left image" />
      <img className='right-img' src={right} alt="right image" />
      <Menu />
      <Start />
    </div>
    
  )
}

export default App