import React, {Component} from 'react';
import {
	ROCK,
	PAPER,
	SCISSORS,
	COMPUTER,
	PLAYER,
} from './constants'
import getWinner from './getWinner'
import PlayerChoice from './PlayerChoice';
import rockImage from './images/rock.jpg';
import paperImage from './images/paper.jpg';
import scissorsImage from './images/scissors.jpg';
import TaskButton from '../../components/TaskButton/TaskButton'
import Task from './Task'

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}
function getComputerChoice() {
	const choice = getRandomInt(3);
	if (choice === 0) {
		return ROCK
	}
	if(choice === 1) {
		return PAPER
	}
	return SCISSORS
}

class Play extends Component {
	constructor(props) {
		super(props);

		this.state = {
			playerScore: 0,
			compScore: 0,
		}
		this.rockHandler = this.rockHandler.bind(this)
		this.paperHandler = this.paperHandler.bind(this)
		this.scissorsHandler = this.scissorsHandler.bind(this)
		this.handleClickReset = this.handleClickReset.bind(this)
	}

	playRound(playerResult) {
		const compResult = getComputerChoice();
		const winner = getWinner(playerResult, compResult)
		let playerScore = this.state.playerScore;
		let compScore = this.state.compScore;
		if (winner === COMPUTER) {
			compScore++;
		} else if (winner === PLAYER) {
			playerScore++;
		}
		this.setState({
			playerResult,
			compResult,
			playerScore,
			compScore,
		}); 
	}

	rockHandler() {
		this.playRound(ROCK);
	}

	paperHandler() {
		this.playRound(PAPER);
	}

	scissorsHandler() {
		this.playRound(SCISSORS);
	}

	handleClickReset() {
		this.setState({ 
			playerScore: 0, 
			compScore: 0 
		});
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.playerScore === 5) {
		  alert('PLAYER WINS!');
		} else if (this.state.compScore === 5) {
		  alert('COMPUTER WINS!');
		}
	}

	render() {
		let winner = getWinner(this.state.playerResult, this.state.compResult)
		return ( 
			<div className="App">
				<TaskButton>
					<Task />
				</TaskButton>
				<h2>Rock Paper Scissors game</h2>
				<h3>Choose the image by clicking on the picture</h3>
				
				<PlayerChoice
					name="rock"
					image={rockImage}
					onClick={this.rockHandler}
				/>
				<PlayerChoice
					name="paper"
					image={paperImage}
					onClick={this.paperHandler}
				/>
				<PlayerChoice
					name="scissors"
					image={scissorsImage}
					onClick={this.scissorsHandler}
				/>
				{this.state.playerResult &&
					<div>
						<p>Player Choice: {this.state.playerResult}</p>
						<p>Computer Choice: {this.state.compResult}</p>
						<p>Winner: {winner}</p>
					</div>
				}
				
				<h3>Scoore:</h3>
				<p>Player: {this.state.playerScore}</p>
				<p>Computer: {this.state.compScore}</p>
				<button className="regular-button" onClick={this.handleClickReset}>Reset</button>
			</div>
		)
	}
}
export default Play;