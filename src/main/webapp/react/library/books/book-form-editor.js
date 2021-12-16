const {useParams,useHistory} = window.ReactRouterDOM;
import bookService from "./book-service"
const {useState, useEffect} = React;

const BookFormEditor = () => {
    const {id} = useParams()
    const [book, setBook] = useState({})
    useEffect(() => {
        if(id !== "new"){
            findBookById(id)
        }
    }, []);
    const createBook = (book) =>
        bookService.createBook(book)
            .then(() => history.back())

    const findBookById = (id) =>
        bookService.findBookById(id).then(book => setBook(book))

    const deleteBook = (id) =>
        bookService.deleteBook(id).then(() => history.back())

    const updateBook = (id, newBook) =>
        bookService.updateBook(id, newBook)
            .then(() => history.back())
    
    return (
        <div>
            <h2>Book Editor</h2>
            <label>Id</label>
            <input  className="form-control" value={book.id}/>
            <label>Title</label>
            <input  onChange={(e) =>
                setBook(book =>
                    ({...book, title: e.target.value}))}
                    className="form-control" value={book.title}/>
            <label>Author</label>
            <input   onChange={(e) =>
                setBook(book =>
                    ({...book, author: e.target.value}))}
                     className="form-control" value={book.author}/>
            <label>Reservation Status</label>
            <input  onChange={(e) =>
                setBook(book =>
                   ({...book, reserved: e.target.value}))}
                    className="form-control" value={book.reserved}/>
            <label>Genre</label>
            <select  onChange={(e) =>
                setBook(book =>
                    ({...book, genre: e.target.value}))}
                    className="form-control" value={book.genre}>
                <option>Fiction</option>
                <option>NonFiction</option>
                <option>Cartoon</option>
            </select>
            <br/>
            <button onClick={() => {history.back()}}
                    className="btn btn-warning">Cancel</button>
            <button onClick={() => deleteBook(book.id)}
                    className="btn btn-danger">Delete</button>
            <button  onClick={() => updateBook(book.id, book)}
                     className="btn btn-primary">Save</button>
            <button onClick={() => createBook(book)}
                    className="btn btn-success">Create</button>
        </div>
    )
}

export default BookFormEditor
