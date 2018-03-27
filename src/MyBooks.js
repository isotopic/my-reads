import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ListBooks from './ListBooks'

class MyBooks extends Component{

	render(){
		return (

		<div className="list-books">

            <div className="list-books-title">

              <h1>MyReads</h1>

            </div>

            <div className="list-books-content">

              <ListBooks headerTitle="T1"/>

              <ListBooks headerTitle="T2"/>

            </div>

            <div className="open-search">

              <Link to="/search">Add a book</Link>

            </div>
            
          </div>

		)
	}
}

export default MyBooks
