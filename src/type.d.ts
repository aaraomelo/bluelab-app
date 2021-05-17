interface IUser {
  nome: string
  sobrenome: string
  telefone: string
  cpf: string
}

type UserState = {
  users: IUser[],
  message: StatusCreateUser
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


type DispatchType = (args: UserAction) => UserAction