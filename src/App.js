import React, { Component } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/AboutPage/About'
import ShoppingList from './Projects/ShoppingList/ShoppingList'
import BooksData from './Projects/BooksData/BooksData'
import StopWatch from './Projects/StopWatch/StopWatch'
import Countries from './Projects/CountriesList/CountriesList';
import Game from './Projects/Game/Game'
import CarList from './Projects/CarList/CarList'
import UsersList from './Projects/UsersList/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'


class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			currentView: 'home'
		}
	}

	handleTaskClick() {
		const { taskIsVisible } = this.state
		this.setState({
			taskIsVisible: !taskIsVisible
		})
	}
	
	render() {
		return (
			<Router>
				<div className="AppMain">
					<nav className="Navbar">
						<FontAwesomeIcon icon={faCode} size="lg"/> 
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/about">About</Link>
							</li>
						</ul>
					</nav>

					<h1>BCIT React Projects and Exercises</h1>

					<div className="allButtons">
						<h3>Projects:</h3>
						<div className="projectButtons">
							<button className="projectButton">
								<Link to="/game">Game</Link>
							</button>
							<button className="projectButton">
								<Link to="/books">Library</Link>
							</button>
						</div>
						<div className="exerciseButtons">
							<h3>Exercises:</h3>
							<button className="projectButton">
								<Link to="/cars">Cars</Link>
							</button>
							<button className="projectButton">
								<Link to="/users">Users</Link>
							</button>
							<button className="projectButton">
								<Link to="/shoppinglist">Shopping List</Link>
							</button>
							<button className="projectButton">
								<Link to="/stopwatch">Timer</Link>
							</button>
							<button className="projectButton">
								<Link to="/countries">Countries</Link>
							</button>
						</div>
					</div>

					<Switch>
						<Route path="/" component={Home} exact/>
						<Route path="/about" component={About}/>
						<Route path="/shoppinglist" component={ShoppingList}/>
						<Route path="/books" component={BooksData}/>
						<Route path="/stopwatch" component={StopWatch}/>
						<Route path="/countries" component={Countries}/>
						<Route path="/cars" component={CarList}/>
						<Route path="/game" component={Game}/>
						<Route path="/users" component={UsersList}/>
						<Route>
							<Home/>
						</Route>  
					</Switch> 
				</div>
			</Router>
		)
	}	
}

export default App