const {Link, useHistory} = window.ReactRouterDOM;
import userService from "./user-service"

const {useState, useEffect} = React;

const UserList = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        findAllUsers()
    }, [])
    const findAllUsers = () =>
        userService.findAllUsers().then(users => setUsers(users))

    const history = useHistory()

    return <div>

        <h2>
            <Link onClick={() => history.goBack()}>
                <i className="fas fa-arrow-left margin-right-10px"></i>
            </Link>
            Users
        </h2>
        <button onClick={() => history.push("/users/new")}
                className="btn btn-primary">
            Add User
        </button>


        {
            <div className="row">
                <div className="col">
                    First Name
                </div>
                <div className="col">
                    Last Name
                </div>
                <div className="col">
                    Username
                </div>
                <div className="col-2">
                    Reservations
                </div>
            </div>
        }
        <ul className="List-group">
            {
                users.map(user =>

                    <li className="list-group-item"
                        key={user.id}>
                        <div className="row">
                            <div className="col">
                                <Link to={`/users/${user.id}`}>
                                    {user.firstName}
                                </Link>
                            </div>
                            <div className="col">
                                <Link to={`/users/${user.id}`}>
                                    {user.lastName}

                                </Link>
                            </div>
                            <div className="col">
                                <Link to={`/users/${user.id}`}>
                                    {user.username}
                                </Link>
                            </div>
                            <div className="col-2">
                                <Link to={`/users/${user.id}/reservations`}>
                                    Reservations
                                </Link>
                            </div>
                        </div>
                    </li>)
            }
        </ul>
    </div>

}

export default UserList;

