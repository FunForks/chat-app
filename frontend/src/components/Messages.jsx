/**
 * Messages.jsx
 */



import { useState, useEffect, useRef } from 'react'



export const Messages = ({ endpoint, post }) => {
  const [ message, setMessage ] = useState("")
  const [ incoming, setIncoming ] = useState({})

  const inputRef = useRef()


  const editMessage = event => {
    setMessage(event.target.value)
  }


  const checkForEnter = event => {
    if (event.code === "Enter") {
      event.preventDefault()
      sendMessage()
    }
  }


  const treatIncomingMessage = ({ message, timeStamp }) => {
    setIncoming({ message, timeStamp })
  }


  const sendMessage = () => {
    if (message) {
      post(endpoint, message, treatIncomingMessage)
      setMessage("")
    }
  }


  useEffect(() => {
    inputRef.current.focus()
  }, [])


  const style = {
    display: "flex",
    justifyContent: "space-between",
    width: "12em"
  }


  return (
    <div>
      <input
        type="text"
        value={message}
        onKeyDown={checkForEnter}
        onChange={editMessage}
        ref={inputRef}
      />
      <button
        onClick={sendMessage}
      >
        Send
      </button>

      {incoming.message && (
        <p
          style={style}
        >
          <span>{incoming.message}</span>
          <span>{incoming.timeStamp}</span>
        </p>
      )}
    </div>
  )
}