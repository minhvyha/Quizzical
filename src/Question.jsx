import React from 'react'

function Question(props) {
  let answers = [...props.q.incorrect_answers, props.q.correct_answer]

  let answersElement = answers.map(answer =>{
    
  })
  console.log(answers)
  return (
    <div>
      <h3>{atob(props.q.question)}</h3>
      
    </div>
  )
}

export default Question