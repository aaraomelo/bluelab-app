import * as React from "react"

type Props = {
  message: StatusCreateUser
}

export const Messages: React.FC<Props> = ({ message }) => {
  return (
    <div className="Error" style={{backgroundColor: message.success ? 'yellowgreen':'#e06a6a' }}>
      <div>
        {message.msg.map((msg: string)=>( 
          <h2 key={msg}>{msg}</h2>
        ))}
      </div>
    </div>
  )
}