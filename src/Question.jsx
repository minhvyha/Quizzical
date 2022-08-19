import React from 'react'

function Question(props) {
  let answers = [...props.q.incorrect_answers, props.q.correct_answer]

  let answersElement = answers.map(answer =>{
    return (
      <button className='answer'>{atob(answer)}</button>
    )
  })
  console.log(answers)
  return (
    <div className='question-container'>
      <h3 className='question-title'>{atob(props.q.question)}</h3>
      {answersElement}
      <div className='line'></div>
    </div>
  )
}

export default Question