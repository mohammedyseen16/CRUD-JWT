import { useState } from 'react'
 

function App() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	
	 

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:1337/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
			alert('Login successful')
			window.location.href = 'http://localhost:3000/my-app'
		} else {
			alert('Please check your username and password')
		}
	}

 
 
	return (
		<div>
			<div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
				<h5 className="my-0 mr-md-auto font-weight-normal">My App</h5>
				<span style={{ paddingRight: 30 }}/>
				<a class="btn btn-outline-primary" href="http://localhost:3000/register">Register</a> 
			</div> 
		 
			<center>
				<br></br><br></br><br></br>
			<h2>Login</h2>
			<br></br>
			<form onSubmit={loginUser} className="form">
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<br />
				<input 
					value={password} 
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"  
				/>
				 
				 
				<br />
				<button type="submit" value="Login" className="button1">Login</button>
				<br />
				<br />
				<p>Don't have an Account? 👇</p>
				<button  className="button" onClick={event =>  window.location.href="http://localhost:3000/register"}>Register</button>
			</form>
			</center>
		</div>
	)
}

 
export default App
