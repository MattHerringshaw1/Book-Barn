import { Component } from 'react';
import '../stylesheets/bookslist.css';

class BooksList extends Component {

    render() {
        const books = this.props.books
        const bookItems = books.map((book) => {
            return  <li >
                        <h2><u>{book.title}</u></h2>
                        <p><b>Author:</b> {book.author}</p>
                        <p><b>Published:</b> {book.year}</p>
                        <p><b>In:</b> <i>{book.language}</i></p>
                        <img alt='prop' src={`https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/${book.imageLink}`}/>
                        <br></br>
                        <a href={book.link}>{book.link}</a>
            </li>
        })
        return <ul>
            {bookItems}
        </ul>
    }
}



export default BooksList