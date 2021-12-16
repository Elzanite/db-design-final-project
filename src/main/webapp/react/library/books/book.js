import BookList from "./book-list";
import BookFormEditor from "./book-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM;
const App = () => {
    return (
        <div>
            <HashRouter>
                <Route path={["/books", "/"]} exact={true}>
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

