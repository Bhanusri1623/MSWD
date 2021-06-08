import React, { useState } from 'react'

const App = () => {
	const course = 'Full Stack Development'
	const parts = [
		{
		  name: 'Fundamentals of webApps ',
		  exercises: 6
		},
		{
            name: 'Introduction to React',
            exercises: 14
        },
        {
            name: 'Communicating with server',
            exercises: 20
        },
        {
            name: 'Programming server with NodeJS and Express',
            exercises: 25
        }
	]

	return (
		<div>
			<Header course={course} />
			<Content parts={parts} />
			<Total parts={parts} />
		</div>
	)
};

const Header = (props) => {
	return (
		<div>
			<h1>{props.course}</h1>
		</div>
	)
};

const Content = (props) => {
	const lists = props.parts.map(function(item) {
		return (
			<div>
				<p> {item.name}: {item.exercises}</p>
			</div>
		)
	})
	
	return lists
};

const Total = (props) => {
	var score = 0
	
	const lists = props.parts.map(function(item) {
		
		score = score + item.exercises 
		
	})
	
	return (
		<div>
			<p>Number of exercises: {score} </p>
		</div>
	)
};
export default App;
