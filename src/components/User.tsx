import * as React from "react"
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"

type Props = {
  user: IUser
  removeUser: (user: IUser) => void
}

export const User: React.FC<Props> = ({ user, removeUser }) => {
  const dispatch: Dispatch<any> = useDispatch()

  const deleteUser = React.useCallback(
    async (user: IUser) => dispatch(await removeUser(user)),
    [dispatch, removeUser]
  )

  return (
    <div className="User">
      <div>
        <h1>{`${user.nome} ${user.sobrenome}`}</h1>
      </div>
      <button onClick={() => deleteUser(user)}>Delete</button>
    </div>
  )
}