import reservationService from "./reservation-service"

const {useState, useEffect} = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const ReservationList = () => {
    const [reservations, setReservations] = useState([])
    const [newReservation, setNewReservation] = useState({bookId: ''})
    const {userId} = useParams()
    useEffect(() => {
        findReservationsForUser(userId)
    }, [])

    const history = useHistory()

    const createNewReservation = (userId, bookId, reservation) =>
    {
        console.log(userId, bookId, reservation)
        return Promise.resolve(reservationService.createReservation(userId, bookId, reservation)
            .then(reservations => setReservations(reservations)))
    }

    const findReservationsForUser = (userId) =>
        reservationService.findReservationsForUser(userId)
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
                                <input placeholder="Book ID"
                                       title="Please enter the id of the book"
                                       className="form-control"
                                       value={newReservation.bookId}
                                       onChange={(e) =>
                                           setNewReservation(newReservation =>
                                               ({...newReservation, userId: parseInt(userId), bookId: parseInt(e.target.value)}))}/>
                            </div>
                            <div className="col-2">
                                <i className="fas float-right fa-plus fa-2x" onClick={() => createNewReservation(parseInt(userId), newReservation.bookId, newReservation)}></i>
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
                                <Link to={`/users/${userId}/reservations/book/${reservation.bookId}/${reservation.id}`}>
                                    {reservation.id}
                                </Link>
                                 </div>
                                <div className="col">
                                    <Link to={`/users/${userId}/reservations/book/${reservation.bookId}/${reservation.id}`}>
                                        {reservation.res_date}
                                    </Link>
                                </div>
                                <div className="col">
                                    <Link to={`/users/${userId}/reservations/book/${reservation.bookId}/${reservation.id}`}>
                                        {reservation.due_date}
                                    </Link>
                                </div>
                                <div className="col">
                                    <Link to={`/users/${userId}/reservations/book/${reservation.bookId}/${reservation.id}`}>
                                        {reservation.userId}
                                    </Link>
                                </div>
                                <div className="col-2">
                                <Link to={`/users/${userId}/reservations/book/${reservation.bookId}/${reservation.id}`}>
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

export default ReservationList;

