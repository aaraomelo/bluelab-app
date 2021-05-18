interface IUser {
  nome: string
  sobrenome: string
  telefone: string
  cpf: string
}

type UserState = {
  users: IUser[],
  message: StatusCreateUser,
  auth: boolean,
  token: string,
  userFound: IUser
}

type Token = {
  token: string
}

type UserAction = {
  type: string
  user: IUser
}

type LoadUsersAction = {
  type: string
  users: IUser[]
}


type StatusCreateUser = {
  success: boolean
  msg: string[]
}

type AddUsersErrorAction = {
  type: string
  message: StatusCreateUser
}

type Credentials = {
  cpf: string
  telefone: string
}

type findUser = {
  cpf: string
}

type AuthAction = {
  type: string,
  token: string
}

type AuthErrorAction = {
  type: string,
  message: StatusCreateUser
}

type RemoveUserErrorAction = {
  type: string,
  message: StatusCreateUser
}

type findUserAction = {
  type: string,
  user:IUser
}

type findUserErrorAction = {
  type: string,
  message: StatusCreateUser
}

type DispatchType = (args: UserAction) => UserAction