import React, { useState, useEffect } from 'react'
import Menu from './Menu'
import blob1 from './assets/blob1.svg'
import Question from './Question'

function App() {
  const [started, setStarted] = useState(false)
  const [questions, setQuestions] = useState([]);
  const [count, setCount] = useState(0)


  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=18&encode=base64")
            .then(res => res.json())
            .then(data => setQuestions(data.results));
  }, [count])

   let questionElement = questions ? questions.map(question =>{
    return(
      <Question
       q={question}
      />
    )
   }) : []

   console.log(questions)

  function start(){
    setStarted(x => !x)
  }

  return (
    <div className='main-container'>
      <div className='content-container'>
        { started ? 
         <div className='start-content-container'>
            {questionElement}
          <button className='check'>Check Answer</button>
         </div>
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