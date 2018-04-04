import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ListBooks from './ListBooks'
import { debounce } from "throttle-debounce";

class SearchBook extends Component{

	static propTypes = {
		shelves: PropTypes.array.isRequired,
		onChangeBookShelf: PropTypes.func.isRequired,
		onSearchBooks: PropTypes.func.isRequired,
		results: PropTypes.array
	}

	state = {
		query: ''
	}
	
	changeQuery = event => {
		this.setState({ query: event.target.value }, () => {
			this.searchThrottled(this.state.query)
		});
	}

	search = () => {
		this.props.onSearchBooks(this.state.query);
	}

	searchThrottled = debounce(600, q =>{
		this.search(q)
	});

	render(){

		const { shelves, onChangeBookShelf, results } = this.props

		return(
			
			<div className="search-books">

            	<div className="search-books-bar">

           			<Link className="close-search"  to="/">Close</Link>

		        			<div className="search-books-input-wrapper">

		            			<input type="text" 
		            				placeholder="Search by title or author" 
									value={this.state.query}
									onChange={this.changeQuery}
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
