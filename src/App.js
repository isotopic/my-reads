
import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import MyBooks from './MyBooks'
import SearchBook from './SearchBook'
import './App.css'


class App extends Component {
	
  state = {
    books: [],
    shelves: [
      {shelfTitle:"Currently Reading", shelf: "currentlyReading"},
      {shelfTitle:"Want to Read", shelf: "wantToRead"},
      {shelfTitle:"Read", shelf: "read"}
    ]
  }

  componentDidMount() {
    this.getAllBooks()
  }

  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  changeBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(book => {
      this.getAllBooks()
    })
  }

  render() {

  	return (

  		<div className="app">

	  		<Route exact path='/' render={() => (
	          <MyBooks books={this.state.books} shelves={this.state.shelves} onChangeBookShelf={this.changeBookShelf}/>
	       )}/>

        <Route path='/search' render={({ history }) => (
          <SearchBook/>
        )}/>

	    </div>

  	)

  }
}

export default App
