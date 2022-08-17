import React, { useState, useEffect } from 'react'
import Menu from './Menu'
import Start from './Start'
import blob1 from './assets/blob1.svg'

function App() {
  const [started, setStarted] = useState(false)
  const [questions, setQuestions] = useState();
  const [count, setCount] = useState(0)

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://opentdb.com/api.php?amount=5&category=18")
      const data = await res.json()
      setQuestions(data.results)
    }
    fetchData();
    
  }, [])

  
  function start(){
    setStarted(x => !x)
    console.log(questions)
  }

  return (
    <div className='main-container'>
      <div className='content-container'>
        { started ? 
         <Start 
          questions={questions}
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