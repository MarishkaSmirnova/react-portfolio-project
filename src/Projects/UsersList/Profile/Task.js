import React from 'react'

function Task() {
	return (
		<ul>
			<li>Create a Login View and a Users View component.</li>
			<li>On the Login View, display a "Login" button with username and passwors inputs</li>
			<li>Clicking on the "login" button should hide the Login View and display the Users View.</li>
			<li>Render all items in the Array in the Users View. The data represents test users. Data available at randomuser.me</li>
			<li>Ensure that you create a "Profile" component - don't render everything in one giant component.</li>
			<li>Display different icons for male/female users.</li>
			<li>Display flags  depending on that country the user is from. You can use the "nat" property of the user object to determine this.</li>
			<li>Display non-sensitive data in your Profile component, such as name, username, image, address, etc.</li>
			<li>Create "delete" button for each user in the list.</li>
		</ul>
	
	)
}
export default Task