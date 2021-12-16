import reservationService from "./reservation-service"

const {useState, useEffect} = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const ReservationListBook = () => {
    const [reservations, setReservations] = useState([])
    const [newReservation, setNewReservation] = useState({userId: ''})
    const {bookId} = useParams()
    useEffect(() => {
        findReservationsForBook(bookId)
    }, [])

    const history = useHistory()

    const createNewReservation = (userId, bookId) =>
    {
        console.log(userId, bookId)
        return Promise.resolve(reservationService.createReservation(userId, bookId)
            .then(reservations => setReservations(reservations)))
    }

    const findReservationsForBook = (bookId) =>
        reservationService.findReservationsForBook(bookId)
            .then(reservations => setReservations(reservations))

    return(
        <div>
            <h2>
                <Link onClick={() => history.goBack()}>
                    <i className="fas fa-arrow-left margin-right-10px"></i>
                </Link>
                Reservations
            </h2>
            {/*<button onClick={() => history.push('/reservations/book/new/new')}*/}
            {/*        className="btn btn-primary">*/}
            {/*    Add Reservation*/}
            {/*</button>*/}
            <ul className="list-group">
                    <li className="list-group-item">
                        <div className="row">
                            <div className="col">
                                <input placeholder="User ID"
                                       title="Please enter the id of the user"
                                       className="form-control"
                                       value={newReservation.userId}
                                       onChange={(e) =>
                                           setNewReservation(newReservation =>
                                               ({...newReservation, bookId: parseInt(bookId), userId: parseInt(e.target.value)}))}/>
                            </div>
                            <div className="col-2">
                                <i className="fas float-right fa-plus fa-2x" onClick={() => createNewReservation(newReservation.userId, parseInt(bookId))}></i>
                            </div>
                        </div>
                    </li>
                {
                    <div className="row">
                        <div className="col">
                            Reservation ID
                        </div>
                        <div className="col">
                            Date reserved
                        </div>
                        <div className="col">
                            Due date
                        </div>
                        <div className="col">
                            User ID
                        </div>
                        <div className="col">
                            Book ID
                        </div>
                    </div>
                }
                {
                    reservations.map(reservation =>
                        <li className="list-group-item"
                            key={reservation.id}>
                            <div className="row">
                                <div className="col">
                                <Link to={`/users/${reservation.userId}/reservations/book/${bookId}/${reservation.id}`}>
                                    {reservation.id}
                                </Link>
                                 </div>
                                <div className="col">
                                    <Link to={`/users/${reservation.userId}/reservations/book/${bookId}/${reservation.id}`}>
                                        {reservation.res_date}
                                    </Link>
                                </div>
                                <div className="col">
                                    <Link to={`/users/${reservation.userId}/reservations/book/${bookId}/${reservation.id}`}>
                                        {reservation.due_date}
                                    </Link>
                                </div>
                                <div className="col">
                                    <Link to={`/users/${reservation.userId}/reservations/book/${bookId}/${reservation.id}`}>
                                        {reservation.userId}
                                    </Link>
                                </div>
                                <div className="col-2">
                                <Link to={`/users/${reservation.userId}/reservations/book/${bookId}/${reservation.id}`}>
                                    {reservation.bookId}
                                </Link>
                                </div>
                            </div>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default ReservationListBook;

