import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListBooks extends Component{

  static propTypes = {
    shelfTitle: PropTypes.string,
    books: PropTypes.array.isRequired,
    shelves: PropTypes.array.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired
  }

	render(){

    const { shelfTitle, books, shelves, onChangeBookShelf } = this.props

		return (

        <div className="bookshelf">

          {shelfTitle && (
            <h2 className="bookshelf-title">{ shelfTitle }</h2>
          )}

          <div className="bookshelf-books">

            <ol className="books-grid">

              {books.map((book) => (

                <li key={book.id} >

                  <div className="book">

                    <div className="book-top">

                    {book.imageLinks ? (
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                    ):(
                      <div className="book-cover"  style={{ width: 128, height: 193, backgroundColor: '#ccc' }}></div>
                    )}
                   
                    <div className="book-shelf-changer">
                      <select onChange={(e) => onChangeBookShelf(book, e.target.value)} value={book.shelf}>
                        <option value="none" disabled>Move to...</option>
                        {shelves.map((s) => (
                          <option value={s.shelf} key={s.shelf}>{s.shelfTitle}</option>
                        ))}
                        <option value="none">None</option>
                      </select>
                    </div>

                  </div>

                  <div className="book-title">{ book.title }</div>

                  <div className="book-authors">{ book.authors && (book.authors.join(", ")) }</div>

                </div>

                </li>

              ))}

            </ol>

          </div>

        </div>

		)

	}

}

export default ListBooks
