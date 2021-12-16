const {Link,useHistory} = window.ReactRouterDOM;
import bookService from "./book-service"
const { useState, useEffect} = React;

const BookList = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        findAllBooks()
    }, [])
    const findAllBooks = () =>
        bookService.findAllBooks().then(books => setBooks(books))

    const history = useHistory()

    return<div>
        <h2>
            <Link onClick={() => history.goBack()}>
                <i className="fas fa-arrow-left margin-right-10px"></i>
            </Link>
            Books</h2>
        <button onClick={() => history.push("/books/new")}
                className="btn btn-primary">
            Add Book
        </button>

        {
            <div className="row">
                <div className="col">
                    Book ID
                </div>
                <div className="col">
                    Title
                </div>
                <div className="col-2">
                    Author
                </div>
                <div className="col-2">
                    Reservations
                </div>
            </div>
        }
        <ul className="List-group">
            {
                books.map(book =>
                    <li className="list-group-item"
                        key={book.id}>
                        {console.log(book.id)}
                        <div className="row">
                            <div className="col">
                                <Link to={`/books/${book.id}`}>
                                    {book.id}
                                </Link>
                            </div>
                            <div className="col">
                                <Link to={`/books/${book.id}`}>
                                    {book.title}
                                </Link>
                            </div>
                            <div className="col-2">
                                <Link to={`/books/${book.id}`}>
                                    {book.author}
                                </Link>
                            </div>
                            <div className="col-2">
                                <Link to={`/books/${book.id}/reservations`}>
                                    Reservations
                                </Link>
                            </div>
                        </div>
                    </li>)
            }
        </ul>
    </div>

}

export default BookList;

