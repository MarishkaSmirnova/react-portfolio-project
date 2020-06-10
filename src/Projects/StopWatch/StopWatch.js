import React, { Component } from 'react'
import './StopWatch.css'
import TaskButton from '../../components/TaskButton/TaskButton'
import Task from './Task'

const STATUS_RESET = 'reset';
const STATUS_RUNNING = 'running';
const STATUS_PAUSE = 'pause';

class StopWatch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            seconds: 0,
			status: STATUS_RUNNING,
        }
		this.setTime = this.setTime.bind(this);
    }
    componentDidMount() {
        this.interval = setInterval(this.setTime, 1000);
    }
    setTime() {
        this.setState({
            seconds: this.state.seconds + 1,
        }); 
    }
    startHandler = () => {
        this.interval = setInterval(this.setTime, 1000);
        this.setState({
            status: STATUS_RUNNING,
        });
    }
    resetHandler = () => {
        clearInterval(this.interval);
        this.setState({
            seconds: 0,
            status: STATUS_RESET,
        })
    }
    pauseHandler = () => {
        clearInterval(this.interval);
        this.setState({
            status: STATUS_PAUSE,
        })
    }

    render() {
        const min = Math.floor(this.state.seconds / 60);
        const sec = this.state.seconds - min * 60;
        return (
            <div className="Timer App">
				<TaskButton>
					<Task />
				</TaskButton>		
                <h2>Timer:</h2>
                {min}:{sec}
                <br />
                {this.state.status !== STATUS_RUNNING &&
                    <button className="regular-button" onClick={this.startHandler}>Start</button>
                }
                {this.state.status === STATUS_RUNNING &&
                    <button className="regular-button" onClick={this.pauseHandler}>Pause</button>
                }
				&nbsp;
                <button 
					disabled={this.state.status === STATUS_RESET} 
					onClick={this.resetHandler}
					className="ResetButton regular-button"
                >
                    Reset
                </button>
            </div>
          );  
    }
}

export default StopWatch;

