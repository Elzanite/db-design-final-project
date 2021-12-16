// TODO: declare URL where server listens for HTTP requests
import reservation from "../reservation";

const RESERVATION_URL = "http://localhost:8080/api/reservations"
const USER_URL = "http://localhost:8080/api/users"
const BOOK_URL = "http://localhost:8080/api/books"

export const findAllReservations = () => {
    return fetch(RESERVATION_URL).then(response => response.json())
}

// TODO: retrieve a single reservation by their ID
export const findReservationById = (id) =>
    fetch(`${RESERVATION_URL}/${id}`).then(response => response.json())

// TODO: delete a reservation by their ID
export const deleteReservation = (id) =>
    fetch(`${RESERVATION_URL}/${id}`, {
        method: "DELETE"
    })


// TODO: update a reservation by their ID
export const updateReservation = (id, reservation) =>
    fetch(`${RESERVATION_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(reservation),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const findReservationsForUser = (userId) =>
    fetch(`${USER_URL}/${userId}/reservations`)
        .then(response => response.json())

export const findReservationsForBook = (bookId) =>
    fetch(`${BOOK_URL}/${bookId}/reservations`)
        .then(response => response.json())

export const createReservation = (userId, bookId) =>
    fetch(`${USER_URL}/${userId}/reservations/book/${bookId}`, {
        method: 'POST',
        headers: {'content-type': 'application/json'}
    }).then(response => response.json())

export default {
    findAllReservations,
    findReservationById,
    deleteReservation,
    createReservation,
    updateReservation,
    findReservationsForUser,
    findReservationsForBook
}

