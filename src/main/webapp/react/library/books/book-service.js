// TODO: declare URL where server listens for HTTP requests
const BOOKS_URL = "http://localhost:8080/api/books"

export const findAllBooks = () => {
    return fetch(BOOKS_URL).then(response => response.json())
}

// TODO: retrieve a single book by their ID
export const findBookById = (id) =>
    fetch(`${BOOKS_URL}/${id}`).then(response => response.json())


// TODO: delete a book by their ID
export const deleteBook = (id) =>
    fetch(`${BOOKS_URL}/${id}`, {
        method: "DELETE"
    })

// TODO: create a new book
export const createBook = (book) =>
    fetch(BOOKS_URL, {
        method: 'POST',
        body: JSON.stringify(book),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

// TODO: update a book by their ID
export const updateBook = (id, book) =>
    fetch(`${BOOKS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(book),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


export default {
    findAllBooks,
    findBookById,
    deleteBook,
    createBook,
    updateBook
}

