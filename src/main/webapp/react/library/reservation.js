import BookList from "./reservations/reservation-list";
import BookFormEditor from "./reservations/reservation-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM;
const App = () => {
    return (
        <div>
            <HashRouter>
                <Route path={["/reservations", "/"]} exact={true}>
                    <BookList/>
                </Route>
                <Route path="/reservations/:id" exact={true}>
                    <BookFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}
export default App

