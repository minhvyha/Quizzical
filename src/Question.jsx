import React from 'react'
import { nanoid } from 'nanoid'

function Question(props) {
  let answers = props.q.answers

  function handleClick(answer){
    props.handleClickAnswer(props.id, answer)
  }


  const answersElement = answers.map(answer =>{
    return <button key={nanoid()} className={answer === props.q.selected ? 'answer selected' : 'answer'} onClick={() => handleClick(answer)}>{atob(answer)}</button>
  })


  return (
    <div className='question-container'>
      <h3 className='question-title'>{atob(props.q.question)}</h3>
        {answersElement}
      <div className='line'></div>
    </div>
  )
}

export default Question