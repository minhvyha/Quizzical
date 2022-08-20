import React from 'react'

function Question(props) {
  let answers = [...props.q.incorrect_answers, props.q.correct_answer]

  function handleClick(x){
    x.className = 'answer selected'
  }

  let answersElement = answers.map(answer =>{
    return (
      <button className='answer' onClick={x => handleClick(x)}>{atob(answer)}</button>
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