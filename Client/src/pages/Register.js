import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function App() {
	const history = useHistory()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:1337/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			history.push('/login')
		}
	}

	return (
		<div>
			<div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
				<h5 className="my-0 mr-md-auto font-weight-normal">My App</h5>
				<a class="btn btn-outline-primary" href="http://localhost:3000/login">Login</a>
				<span style={{ paddingRight: 30 }}/>
				<a class="btn btn-outline-primary" href="http://localhost:3000/register">Register</a>

			</div> 
            <center>
			<br></br><br></br><br></br>
			<h2>Register</h2>
			<br></br>
			<form onSubmit={registerUser}>
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="Name"
				/>
				<br />
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
				<button type="submit" value="Register" className="button1">Register</button>
				<br />
				<br />
				<p>Already have an Account? 👇</p>
				<button  className="button" onClick={event => window.location.href="http://localhost:3000/login"}>Login</button>
			</form>
			</center>
		</div>
	)
}

export default App
