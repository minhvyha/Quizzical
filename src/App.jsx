import React, { useState, useEffect } from 'react'
import Menu from './Menu'
import blob1 from './assets/blob1.svg'
import Question from './Question'
import { nanoid } from 'nanoid'

function App() {
  const [started, setStarted] = useState(false)
  const [questions, setQuestions] = useState([]);
  const [count, setCount] = useState(0)
  const [checked, setChecked] = useState(false)


  const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

  useEffect(() => {
    async function getQuestion() {
      const res = await fetch("https://opentdb.com/api.php?amount=5&category=18&encode=base64")
      const data = await res.json()
      let q = []
      data.results.forEach(question =>{
        q.push({id: nanoid(), answers:shuffleArray([...question.incorrect_answers, question.correct_answer]), question:question.question, correct:question.correct_answer, selected: null, checked:false})
      })
      setQuestions(q)
  }
    getQuestion()
  }, [count])

  function handleCheck(){
    setQuestions(questions => questions.map(question => {
      return {...question, checked:true}
    }))
    setChecked(true)
  }

  function handleClickAnswer(id, answer) {
    setQuestions(questions => questions.map(question =>{
      return question.id === id ? {...question, selected: answer} : question
    }))
  }

  function handlePlayAgain(){
    setQuestions(questions => questions.map(question => {
      return {...question, checked:false}
    }))
    setChecked(false)
  }

   const questionElement = questions ? questions.map(question =>{
    return(
      <Question
       key={question.id}
       q={question}
       handleClickAnswer={handleClickAnswer}
       id={question.id}
      />
    )
   }) : []

  function start(){
    setStarted(x => !x)
  }

  return (
    <div className='main-container'>
      <div className='content-container'>
        { started ? 
         <div className='start-content-container'>
            {questionElement}
          <button className='check' onClick={checked ? handlePlayAgain : handleCheck}>{checked ? 'Play Again' : 'Check Answer'}</button>
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