import * as React from "react"

type Props = {
  saveUser: (user: IUser | any) => void
}

export const AddUser: React.FC<Props> = ({ saveUser }) => {
  const [user, setUser] = React.useState<IUser | {}>()

  const handleUserData = (e: React.FormEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const addNewUser= (e: React.FormEvent) => {
    e.preventDefault()
    saveUser(user)
  }

  return (
    <form onSubmit={addNewUser} className="Add-user">
      <input
        type="text"
        id="nome"
        placeholder="Nome"
        onChange={handleUserData}
      />
      <input
        type="text"
        id="sobrenome"
        placeholder="Sobrenome"
        onChange={handleUserData}
      />
      <button disabled={user === undefined ? true : false}>
        Add User
      </button>
    </form>
  )
}