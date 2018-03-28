import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ListBooks from './ListBooks'

class MyBooks extends Component{

  static propTypes = {
    books: PropTypes.array.isRequired,
    shelves: PropTypes.array.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired
  }

	render(){

    const { books, shelves, onChangeBookShelf } = this.props

		return (

		  <div className="list-books">

        <div className="list-books-title">

          <h1>MyReads</h1>

        </div>

        <div className="list-books-content">

          {shelves.map((s) => (

            <ListBooks 
              key={s.shelf}
              shelfTitle={s.shelfTitle} 
              shelves={shelves}
              books={books.filter((book) => book.shelf === s.shelf)}
              onChangeBookShelf={onChangeBookShelf}
            />

          ))}

        </div>

        <div className="open-search">

          <Link to="/search">Add a book</Link>

        </div>
          
      </div>

		)
	}
}

export default MyBooks
