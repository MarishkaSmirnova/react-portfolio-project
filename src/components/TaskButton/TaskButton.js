import React, {Component} from 'react'

class TaskButton extends Component {
	constructor(props) {
		super(props)

		this.state = {
			taskIsVisible: false
		}
		this.handleTaskClick = this.handleTaskClick.bind(this)
	}
	handleTaskClick() {
		const   { taskIsVisible }   = this.state
		this.setState({
			taskIsVisible: !taskIsVisible
		})
	}
	render() {
		return (
			<div>
				<button onClick={this.handleTaskClick}
		  				className="TaskButton">
					{this.state.taskIsVisible ? "Close" : "Open"} the Task
				</button>
				<br/>
				{this.state.taskIsVisible && (
					<div className="TaskData">
						{this.props.children}
					</div>
				)}	
			</div>
		)
	}
}
export default TaskButton