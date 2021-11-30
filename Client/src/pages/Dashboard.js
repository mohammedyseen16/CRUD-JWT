import React, { useEffect, useState } from 'react'
import jwt from 'jsonwebtoken'
import { useHistory } from 'react-router-dom'
import ToDoList from '../To-Do-List'
 
const Dashboard = () => {
	const history = useHistory()
	const [quote, setQuote] = useState('')
	const [tempQuote, setTempQuote] = useState('')

	async function populateQuote() {
		const req = await fetch('http://localhost:1337/api/quote', {
			headers: {
				'x-access-token': localStorage.getItem('token'),
			},
		})

		const data = await req.json()
		if (data.status === 'ok') {
			setQuote(data.quote)
		} else {
			
			alert(data.error)
		}
	}

	useEffect(() => {
		const token = localStorage.getItem('token')
		if (token) {
			const user = jwt.decode(token)
			if (!user) {
				localStorage.removeItem('token')
				history.replace('/login')
			} else {
				<button onClick={event =>  window.location.href=('http://localhost:3000/login')}>click</button>
				populateQuote()
			}
		}
	}, [])

	async function updateQuote(event) {
		event.preventDefault()

		const req = await fetch('http://localhost:1337/api/quote', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'x-access-token': localStorage.getItem('token'),
			},
			body: JSON.stringify({
				quote: tempQuote,
			}),
		})

		const data = await req.json()
		if (data.status === 'ok') {
			setQuote(tempQuote)
			setTempQuote('')
			return ToDoList;
		} else {
			alert("You have not logged in, Please Login")
			window.location.href='http://localhost:3000/login';
		}
	}

	

	return (
		<div>

			<div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
				<h5 className="my-0 mr-md-auto font-weight-normal">My App</h5>
				<a class="btn btn-outline-primary" href="http://localhost:3000/login">Login</a>
				<span style={{ paddingRight: 30 }}/>
				<a class="btn btn-outline-primary" href="http://localhost:3000/register">Sign up</a>

			</div> 
		
			<center>
				<br></br><br></br>
			<h3>Click below button to use app</h3>
			<br></br> 
		
			
			</center>  
			<div className="image">
				<img className="img1" src="./images/yas.png" alt="home page image"></img>
				{/* <button type="submit" className="button2" value="Update quote">Login</button> */}
			</div> 
			
		    <form onSubmit={updateQuote}>
				 
				<button type="submit"  className="button2" onClick={event =>  window.location.href='http://localhost:3000/my-app'}>GotoApp</button>
		    </form> 
	 
		</div>
		
	)
}

export default Dashboard
