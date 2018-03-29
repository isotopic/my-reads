import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ListBooks from './ListBooks'

class SearchBook extends Component{


  static propTypes = {
    shelves: PropTypes.array.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired,
    onSearchBooks: PropTypes.func.isRequired,
    results: PropTypes.array
  }


	render(){

		const { books, shelves, onChangeBookShelf, onSearchBooks, results } = this.props

		return(
			
			<div className="search-books">

            	<div className="search-books-bar">

           			<Link className="close-search"  to="/">Close</Link>

		        			<div className="search-books-input-wrapper">

		            			<input type="text" 
		            				placeholder="Search by title or author" 
									onChange={ (event) => onSearchBooks(event.target.value) }
								/>

		        			</div>

	            	</div>

		            <div className="search-books-results">
		            	<ol className="books-grid">

		            	{results.length > 0 && (

		            		<ListBooks 
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
