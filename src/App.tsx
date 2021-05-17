import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { User } from "./components/User"
import { AddUser } from "./components/AddUser"
import { Messages } from "./components/Messages"

import { addUser, removeUser, loadUsers, authUser } from "./store/actionCreators"
import { Dispatch } from "redux"
import "./App.css"
import { AuthUser } from "./components/AuthUser"

const App: React.FC = () => {
  const users: readonly IUser[] = useSelector(
    (state: UserState) => state.users,
    shallowEqual
  )

  const message: StatusCreateUser = useSelector(
    (state: UserState) => state.message,
    shallowEqual
  )

  const dispatch: Dispatch<any> = useDispatch()

  const saveUser = React.useCallback(
    async (user: IUser) => dispatch(await addUser(user)),
    [dispatch]
  )

   const authenticateUser = React.useCallback(
    async (credentials: Credentials) => dispatch(await authUser(credentials)),
    [dispatch]
  )

  React.useEffect(() => {
    (async () => dispatch(await loadUsers()))()
  }, [dispatch]);

  return (
    <main>
      <h1>Autenticação</h1>
      <AuthUser authUser = {authenticateUser}/>
      <h1>Menssagens</h1>
      <Messages message={ message } />
      <h1>Adicione um usuário</h1>
      <AddUser saveUser={saveUser} />
      <h1>Usuários adicionados</h1>
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