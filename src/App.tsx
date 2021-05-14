import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { User } from "./components/User"
import { AddUser } from "./components/AddUser"
import { addUser, removeUser } from "./store/actionCreators"
import { Dispatch } from "redux"
import "./App.css"
import usersService from "./services/user.service"

const App: React.FC = () => {
  const users: readonly IUser[] = useSelector(
    (state: UserState) => state.users,
    shallowEqual
  )

  const dispatch: Dispatch<any> = useDispatch()

  const saveUser = React.useCallback(
    (user: IUser) => dispatch(addUser(user)),
    [dispatch]
  )

  React.useEffect(() => {
    console.log(`Component mounted!`);
    usersService.getAllUsers().then((response)=>{console.log(response);
    })
  }, []);

  return (
    <main>
      <h1>Usuários</h1>
      <AddUser saveUser={saveUser} />
      {users.map((user: IUser) => (
        <User
          key={user.cpf}
          user={user}
          removeUser={removeUser}
        />
      ))}
    </main>
  )
}

export default App