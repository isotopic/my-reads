
import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import MyBooks from './MyBooks'
import SearchBook from './SearchBook'
import Throbber from './Throbber'
import './App.css'


class App extends Component {
	
  state = {
    books: [],
    shelves: [
      {shelfTitle:"Currently Reading", shelf: "currentlyReading"},
      {shelfTitle:"Want to Read", shelf: "wantToRead"},
      {shelfTitle:"Read", shelf: "read"}
    ],
    results: [],
    isLoading: true
  }

  componentDidMount() {
    this.getAllBooks()
  }

  getAllBooks = () => {
    this.setState({ 'isLoading': true })
    BooksAPI.getAll().then((books) => {
      this.setState({ 'books': books, 'isLoading': false, 'results': this.mapResults(this.state.results, books)  })
    })
  }

  changeBookShelf = (book, shelf) => {
    this.setState({ 'isLoading': true })
    BooksAPI.update(book, shelf).then(book => {
      this.getAllBooks()
    }).catch((err) => {
      this.setState({ 'isLoading': false });
      alert('An error ocurred.');
    })
  }

  searchBooks = (query) => {
    if(query.length > 2){
      this.setState({ 'isLoading': true });
      BooksAPI.search(query).then((results) => {
        if(results.error){
          this.setState({ 'results': [], 'isLoading': false })
        }else{
          this.setState({ 'results': this.mapResults(results, this.state.books), 'isLoading': false })
        }
      })
    }
  }

  //Updates the 'shelf' property of already added books
  mapResults = (results, books) => {
    return results.map(book => {
      let found = books.find(b => b.id === book.id);
      book.shelf = (found ? found.shelf : 'none');
      return book;
    })
  }



  render() {

    const { books, shelves, results, isLoading } = this.state

  	return (

  		<div className="app">

        <Throbber isLoading={isLoading}/>

        <Route exact path='/' render={() => (
          <MyBooks books={books} shelves={shelves} onChangeBookShelf={this.changeBookShelf}/>
        )}/>

        <Route path='/search' render={() => (
          <SearchBook books={books} shelves={shelves} results={results} onChangeBookShelf={this.changeBookShelf} onSearchBooks={this.searchBooks}/>
        )}/>

	    </div>

  	)

  }
}

export default App
