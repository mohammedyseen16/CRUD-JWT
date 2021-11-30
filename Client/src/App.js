import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import ToDoList from './To-Do-List'
import ProtectedRoute from "./components/ProtectedRoute"
import Logout from './pages/logout'

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Route path="/login" exact component={Login} />
				<Route path="/register" exact component={Register} />
				<Route path="/" exact component={Dashboard} />
				{/* <Route path="*" exact component={ErrorPage} /> */}
			 
				<Route path="/logout" component={Logout} />
			
				<ProtectedRoute path="/my-app" exact component={ToDoList}/>
 			</BrowserRouter>
		</div>
	)
}

export default App
