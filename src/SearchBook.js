import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'

class SearchBook extends Component{


  static propTypes = {
    books: PropTypes.array.isRequired,
    shelves: PropTypes.array.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired
  }

	state = {
		results: []
	}

	searchBooks(query) {
		if(query.length>2){
	    BooksAPI.search(query).then((results) => {
	      console.log(results);
	      this.setState(state => ({
	        results: results
	      }))
	    })
		}
  }

	render(){

		const { books, shelves, onChangeBookShelf } = this.props

		const { results } = this.state

		return(
			
			<div className="search-books">

            	<div className="search-books-bar">

           			<Link className="close-search"  to="/">Close</Link>

		        			<div className="search-books-input-wrapper">

		            			<input type="text" 
		            				placeholder="Search by title or author" 
												onChange={ (event) => this.searchBooks(event.target.value) }
											/>

		        			</div>

	            	</div>

		            <div className="search-books-results">
		            	<ol className="books-grid">

		            	{results.length > 0 && (

		            		<ListBooks 
		            			shelfTitle="Search results"
				              shelves={shelves}
				              books={results}
				              onChangeBookShelf={onChangeBookShelf}
				            />

				          )}

		            	</ol>
		            </div>

          </div>
		)
	}
}

export default SearchBook
