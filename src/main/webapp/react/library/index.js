import UserList from "./users/user-list";
import UserFormEditor from "./users/user-form-editor";
import ReservationList from "./reservations/reservation-list";
import ReservationFormEditor from "./reservations/reservation-form-editor";
import ReservationListBook from "./reservations/reservation-list-book";
import BookList from "./books/book-list";
import BookFormEditor from "./books/book-form-editor";
import Home from "./home";

const {HashRouter, Link, Route} = window.ReactRouterDOM;
const App = () => {
    console.log(window.ReactRouterDOM)
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path="/" exact={true}>
                    <Home/>
                </Route>
                <Route path="/users" exact={true}>
                    <UserList/>
                </Route>
                <Route path="/users/:id" exact={true}>
                    <UserFormEditor/>
                </Route>
                <Route path="/users/:userId/reservations" exact={true}>
                    <ReservationList/>
                </Route>
                <Route path="/books/:bookId/reservations" exact={true}>
                    <ReservationListBook/>
                </Route>
                <Route path="/users/:userId/reservations/book/:bookId/:reservationId" exact={true}>
                    <ReservationFormEditor/>
                </Route>
                <Route path="/books" exact={true}>
                    <BookList/>
                </Route>
                <Route path="/books/:id" exact={true}>
                    <BookFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}
export default App

