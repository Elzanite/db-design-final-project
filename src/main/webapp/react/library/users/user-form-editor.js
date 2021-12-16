
const {useParams,useHistory} = window.ReactRouterDOM;
import userService from "./user-service"
import book from "../books/book";
const {useState, useEffect} = React;

const UserFormEditor = () => {
    const {id} = useParams()
    const [user, setUser] = useState({})
    useEffect(() => {
        if(id !== "new"){
            findUserById(id)
        }
    }, []);
    const createUser = (user) =>
        userService.createUser(user)
            .then(() => history.back())

    const findUserById = (id) =>
        userService.findUserById(id).then(user => setUser(user))

    const deleteUser = (id) =>
        userService.deleteUser(id).then(() => history.back())

    const updateUser = (id, newUser) =>
        userService.updateUser(id, newUser)
            .then(() => history.back())

    return (
        <div>
            <h2>User Editor</h2>
            <label>Id</label>
            <input  className="form-control" value={user.id}/>
            <label>First Name</label>
            <input  onChange={(e) =>
                setUser(user =>
                    ({...user, firstName: e.target.value}))}
                    className="form-control" value={user.firstName}/>
            <label>Last Name</label>
            <input   onChange={(e) =>
                setUser(user =>
                    ({...user, lastName: e.target.value}))}
                     className="form-control" value={user.lastName}/>
            <label>Username</label>
            <input  onChange={(e) =>
                setUser(user =>
                    ({...user, username: e.target.value}))}
                    className="form-control" value={user.username}/>
            <label>Password</label>
            <input  onChange={(e) =>
                setUser(user =>
                    ({...user, password: e.target.value}))}
                    className="form-control" value={user.password}/>
            <label>Email</label>
            <input  onChange={(e) =>
                setUser(user =>
                    ({...user, email: e.target.value}))}
                    className="form-control" value={user.email}/>
            <label>Date of Birth</label>
            <input  onChange={(e) =>
                setUser(user =>
                    ({...user, dateOfBirth: e.target.value}))}
                    className="form-control" value={user.dateOfBirth}/>

            <br/>
            <button onClick={() => {history.back()}}
                    className="btn btn-warning">Cancel</button>
            <button onClick={() => deleteUser(user.id)}
                    className="btn btn-danger">Delete</button>
            <button  onClick={() => updateUser(user.id, user)}
                     className="btn btn-primary">Save</button>
            <button onClick={() => createUser(user)}
                    className="btn btn-success">Create</button>

        </div>
    )
}

export default UserFormEditor
