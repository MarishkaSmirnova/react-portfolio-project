import React, { Component } from 'react'
import axios from 'axios'
import './BooksData.css'
import TaskButton from '../../components/TaskButton/TaskButton'
import Task from './Task'

class BooksData extends Component{
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      bookName: 'harry potter',
	  bookQuery: '',
    }

    this.inputHandler = this.inputHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
	this.getBooks = this.getBooks.bind(this)
  }

  componentDidMount() {
    setTimeout(this.getBooks, 1000)
  }

  getBooks() {
    const bookQuery = this.state.bookName;
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookQuery}`)
      .then(response => {
        this.setState({
          bookQuery,
          isLoading: false,
          books: response.data.items && response.data.items.map(item => ({
            id: item.id,
            thumbnail: item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail,
            title: item.volumeInfo.title,
            description: item.volumeInfo.description,
            categories: item.volumeInfo.categories,
            link: item.volumeInfo.previewLink,        
          })),
        })
      })
  }

  inputHandler(e) {
    this.setState({
      bookName: e.target.value,
    })
  }

  submitHandler() {
    this.setState({ isLoading: true });
    this.getBooks();
  }

  render() {
    const { isLoading } = this.state;
    const error = !this.state.books || this.state.books.length === 0;

    return (
      <div className="booksData App">
		<TaskButton>
			<Task />
		</TaskButton>
        <h2>Find a book :</h2>
        <input 
          type="text" 
          value={this.state.bookName} 
          onChange={this.inputHandler}
        />
        <button onClick={this.submitHandler}
				className="SearchButton">Search</button>
        {isLoading && 
          <div>
            <p>Loading...</p>
            <p>Please, wait :)</p>
          </div>
        }
        {!isLoading &&
          <div>
            <ul className="BooksList">
              {this.state.books && this.state.books.map(book => (
                  <li key={book.id}>
                    <img 
                      src={book.thumbnail ? book.thumbnail : 'https://books.google.ca/googlebooks/images/no_cover_thumb.gif'} 
                      alt={book.title}
                    />
                    <br />
                    <a href={book.link}>{book.title}</a>
                    <p>{book.description}</p>
                    <p>Category:
                      {book.categories ? 
                        book.categories.reduce((acc, item) => (acc + ', ' + item)) :
                        'Unknown'
                      }
                    </p>
                  </li>
                )
              )}
            </ul>
            {error && 
              <p>Oops! No books found for "{this.state.bookQuery}" !</p>
            }
          </div>
        }
      </div>
    );
  }
}

export default BooksData;
