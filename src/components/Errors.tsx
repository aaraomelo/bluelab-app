import * as React from "react"

type Props = {
  message: StatusCreateUser
}

export const Errors: React.FC<Props> = ({ message }) => {
  return (
    <div className="Error">
      <div>
        {message.msg.map((msg: string)=>( 
          <h2>{msg}</h2>
        ))}
      </div>
    </div>
  )
}