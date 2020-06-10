import React from 'react'

function Task() {
	return (
		<ul>
			<li>Create a book search app using API: "https://www.googleapis.com/books/v1/volumes?q="</li>
			<li>Access the data using Axios (promise based HTTP client for the browser) </li>
			<li>Create an input, prepopulated with ‘harry potter’ and search button</li>
			<li>Using the API data, display a list of books. Each book should have picture, name of the book (should be a link to this book page), description and category.</li>
			<li>If there is no book found, display a message : Oops! No books found for “nameOfTheBook" !</li>
			<li>Display “Loading…” message while the data is loading.</li>
			<li>Use some picture for books with if there’s no data for the  picture and ‘unknown’ category if there’s none in the data </li>
		</ul>
	
	)
}
export default Task