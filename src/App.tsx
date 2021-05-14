import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { User } from "./components/User"
import { AddUser } from "./components/AddUser"
import { addUser, removeUser, loadUsers } from "./store/actionCreators"
import { Dispatch } from "redux"
import "./App.css"

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
    (async () => dispatch(await loadUsers()))()
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