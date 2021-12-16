import reservationService from "./reservation-service"
import userService from "../users/user-service";
import book from "../books/book";

const {useState, useEffect} = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

// Everytime a Reservation is edited, both dates decrement by 1. Possibly caused by
// some sort of mismatch in representation in the JS and Java code?
const ReservationFormEditor = () => {
    const {userId, bookId, reservationId} = useParams()
    const [reservation, setReservation] = useState({})

    useEffect(() => {
        if (reservationId !== "new") {
            findReservationById(reservationId)
        }
    }, []);

    // const createReservation = (userId, bookId, newReservation) => {
    //     console.log(userId, bookId, reservation)
    //     reservationService.createReservation(userId, bookId, newReservation)
    //         .then(() => history.back())
    // }

    const findReservationById = (id) =>
        reservationService.findReservationById(id).then(reservation => setReservation(reservation))

    const deleteReservation = (id) =>
        reservationService.deleteReservation(id).then(() => history.back())

    const updateExistingReservation = (id, reservation) => {
        console.log(id, reservation)
        reservationService.updateReservation(id, reservation)
            .then(() => history.back())
    }

    return (
        <div>
            <h2>Reservation Editor</h2>
            {/*<label>Id</label>*/}
            {/*<input  onChange={(e) =>*/}
            {/*    setReservation(reservation =>*/}
            {/*        ({...reservation, id: parseInt(e.target.value)}))}*/}
            {/*        className="form-control" value={reservation.id}/>*/}
            <label>Reservation Date</label>
            <input onChange={(e) =>
                setReservation(reservation =>
                    ({...reservation, res_date: e.target.value}))}
                   className="form-control" value={reservation.res_date}/>
            <label>Due Date</label>
            <input onChange={(e) =>
                setReservation(reservation =>
                    ({...reservation, due_date: e.target.value}))}
                   className="form-control" value={reservation.due_date}/>
            {/*<label>User ID</label>*/}
            {/*<input type="number" onChange={(e) =>*/}
            {/*    setReservation(reservation =>*/}
            {/*        ({...reservation, userId: parseInt(e.target.value)}))}*/}
            {/*         className="form-control" value={reservation.userId}/>*/}
            {/*<label>Book ID</label>*/}
            {/*<input type="number" onChange={(e) =>*/}
            {/*    setReservation(reservation =>*/}
            {/*        ({...reservation, bookId: parseInt(e.target.value)}))}*/}
            {/*          className="form-control" value={reservation.bookId}/>*/}

            <div className="col">
                <Link to={`/users/${userId}`}>
                    Edit User
                </Link>
            </div>

            <div className="col">
                <Link to={`/books/${bookId}`}>
                    Edit Book
                </Link>
            </div>

            <br/>
            <button onClick={() => {
                history.back()
            }}
                    className="btn btn-warning">Cancel
            </button>
            <button onClick={() => deleteReservation(reservation.id)}
                    className="btn btn-danger">Delete
            </button>
            <button onClick={() => updateExistingReservation(reservation.id, reservation)}
                    className="btn btn-primary">Save
            </button>
            {/*<button onClick={() => createReservation(userId, bookId, reservation)}*/}
            {/*        className="btn btn-success">Create</button>*/}
        </div>
    )
}

export default ReservationFormEditor
