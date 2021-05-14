import * as actionTypes from "./actionTypes"

const initialState: UserState = {
  users: []
}

const reducer = (
    state: UserState = initialState,
    action: any
  ): UserState => {
    switch (action.type) {

      case actionTypes.LOAD_USERS:
        return {
          ...state,
          users: action.users,
        }

      case actionTypes.ADD_USER:
        const newUser: IUser = {
            nome: action.user.nome,
            sobrenome: action.user.sobrenome,
            telefone: action.user.telefone,
            cpf: action.user.cpf,
        }
        return {
          ...state,
          users: state.users.concat(newUser),
        }

      case actionTypes.REMOVE_USER:
        const updatedUsers: IUser[] = state.users.filter(
          user => user.cpf !== action.user.cpf
        )
        return {
          ...state,
          users: updatedUsers,
        }

    }
    return state
  }
  
  export default reducer;
  