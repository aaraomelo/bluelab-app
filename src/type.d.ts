interface IUser {
    nome: string
    sobrenome: string
    telefone: string
    cpf: string
  }
  
  type UserState = {
    users: IUser[]
  }
  
  type UserAction = {
    type: string
    user: IUser
  }

  type LoadUsersAction = {
    type: string
    users: IUser[]
  }
  
  type DispatchType = (args: UserAction) => UserAction