const {Link, useHistory} = window.ReactRouterDOM;

const {useState, useEffect} = React;

const Home = () => {
    const history = useHistory()

    return <div>
        <h2>Users</h2>
        <button onClick={() => history.push("/users")}
                className="btn btn-primary">
            Users
        </button>

        <h2>Books</h2>
        <button onClick={() => history.push("/books")}
                className="btn btn-primary">
            Books
        </button>

    </div>

}

export default Home;

