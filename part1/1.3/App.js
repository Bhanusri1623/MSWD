import React from 'react'



const App = () => {
  const course = 'Full Stack application development'
  const part0 = {
    name: 'Fundamentals of WebApps',
    exercises: 6
  }
  const part1 = {
    name: 'Introduction to React',
    exercises: 14
  }
  const part2 = {
    name: 'Communicating with server',
    exercises: 20
  }
  const part3 = {
    name: 'Programming server with NodeJS and Express',
    exercises: 30
  }


  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part0.name} {part0.exercises}
      </p>
      <p>
        {part1.name} {part1.exercises}
      </p>
      <p>
        {part2.name} {part2.exercises}
      </p>
      <p>
        {part3.name} {part3.exercises}
      </p>
      <p>Number of exercises = {part1.exercises + part2.exercises + part3.exercises}</p>
    </div>
  )
}

export default App
