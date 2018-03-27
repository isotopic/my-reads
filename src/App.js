
import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import MyBooks from './MyBooks'
import SearchBook from './SearchBook'
import './App.css'


class App extends Component {
	
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      console.log(books);
    })
  }

  render() {
  	return (
  		<div className="app">
	  		<Route exact path='/' render={() => (
	          <MyBooks/>
	        )}/>
	        <Route path='/search' render={({ history }) => (
	          <SearchBook/>
	        )}/>
	    </div>
  	)
  }
}

export default App
