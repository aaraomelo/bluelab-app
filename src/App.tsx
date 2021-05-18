import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { User } from "./components/User"
import { AddUser } from "./components/AddUser"
import { Messages } from "./components/Messages"
import { SearchUser } from "./components/SearchUser"

import { Container, Row, Col } from 'react-grid-system';
import { addUser, removeUser, loadUsers, authUser, findUser } from "./store/actionCreators"
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

  const findingUser = React.useCallback(
    async (info: findUser) => dispatch(await findUser(info)),
    [dispatch]
  )

  React.useEffect(() => {
    (async () => dispatch(await loadUsers()))()
  }, [dispatch]);

  return (
    <main>
      <Container>
        <Row>
        <Row>
            <Col>
              <h1>Adicione um usuário</h1>
              <AddUser saveUser={saveUser} />
            </Col>
            <Col>
              <h1>Usuários adicionados</h1>
              {users.map((user: IUser) => (
                <User
                  key={user.cpf}
                  user={user}
                  removeUser={removeUser}
                />
              ))}
            </Col>  
          </Row>
          <Row>
            <Col>
              <h1>Autentique-se</h1>
              <AuthUser authUser = {authenticateUser}/>
            </Col>
            <Col>
              <h1>Busque um usuário</h1>
              <SearchUser searchUser = {findingUser}/>
            </Col>
          </Row>
          <Row>
            <Col>
              <h1>Mensagens</h1>
              <Messages message={ message } />
            </Col>
          </Row>
          
        </Row>
      </Container>
    </main>
  )
}

export default App