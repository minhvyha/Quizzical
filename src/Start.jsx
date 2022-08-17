import React from 'react'

function Start(props) {
  const questions = props.questions.map(question =>{
    return (
      <h2>{question.question}</h2>
    )
  })

  return (
    <div className='start-container'>
      {questions}
    </div>
  )
}

export default Start