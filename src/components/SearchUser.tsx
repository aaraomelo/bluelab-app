import * as React from "react"
import { shallowEqual, useSelector } from "react-redux"

type Props = {
  searchUser: (credentials: Credentials | any) => void
}

export const SearchUser: React.FC<Props> = ({ searchUser }) => {

  const [infoUSer, setInfoUSer] = React.useState<Credentials | {}>()

  const userFound: IUser = useSelector(
    (state: UserState) => state.userFound,
    shallowEqual
  )

  const handleInfoUserData = (e: React.FormEvent<HTMLInputElement>) => {
    setInfoUSer({
      ...infoUSer,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const findUser= (e: React.FormEvent) => {
    e.preventDefault()
    searchUser(infoUSer)
  }

  return (
    <div>
      <form onSubmit={findUser} className="Add-user">
        <input
          type="text"
          id="cpf"
          placeholder="CPF"
          onChange={handleInfoUserData}
        />
        <button disabled={infoUSer === undefined ? true : false}>
          Buscar
        </button>
      </form>
      <div className="User">
        <div>
          <h1>{`${userFound.nome} ${userFound.sobrenome}`}</h1>
        </div>
      </div>
    </div>
  )
}