import * as React from "react"

type Props = {
  authUser: (credentials: Credentials | any) => void
}

export const AuthUser: React.FC<Props> = ({ authUser }) => {
  const [credentials, setCredentials] = React.useState<Credentials | {}>()

  const handleCredentilasData = (e: React.FormEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const addCredentials= (e: React.FormEvent) => {
    e.preventDefault()
    authUser(credentials)
  }

  return (
    <form onSubmit={addCredentials} className="Add-user">
      <input
        type="text"
        id="cpf"
        placeholder="CPF"
        onChange={handleCredentilasData}
      />
      <input
        type="text"
        id="telefone"
        placeholder="telefone"
        onChange={handleCredentilasData}
      />
      <button disabled={credentials === undefined ? true : false}>
        Autenticar
      </button>
    </form>
  )
}