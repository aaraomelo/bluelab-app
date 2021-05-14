import * as actionTypes from "./actionTypes"

const initialState: UserState = {
  users: [
    {
        nome: "João",
        sobrenome: "Carlos",
        telefone: "11968552211",
        cpf: "08438794912"
      },
      {
        nome: "Aarão",
        sobrenome: "Melo",
        telefone: "11977808883",
        cpf: "00108240223"
      }
  ],
}

const reducer = (
    state: UserState = initialState,
    action: UserAction
  ): UserState => {
    switch (action.type) {

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
  