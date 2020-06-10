import React from 'react'

function Task() {
	return (
		<ul>
			<li>Create a new React application, name it "stop-watch".</li>
			<li>Your Stop Watch should render a timer that starts automatically when the View loads.</li>
			<li>The timer should be in the format "mm:ss". Eg. 01:15 (1 minute and 15 seconds). Do not worry about times over 1 hour.</li>
			<li>The timer should update the view every second.</li>
			<li>Display a button labeled "Pause". This button pauses the timer.</li>
			<li>When paused, button should display "Start". Clicking on it restarts the timer.</li>
			<li>Display a button labeled "Reset". This button resets the timer to 0 and stops the timer.</li>
			<li>When the timer is 0, the "Pause" button should be re-labeled as "Start".</li>
			<li>When the timer is 0 and the timer is not running, the Reset button should be disabled. Ensure that the button is also visibly disabled.</li>
			<li>Make sure to test it, to avoid bugs. What happens if the Start button is clicked multiple times? How about if the Stop button is clicked multiple times?</li>
		</ul>
	
	)
}
export default Task