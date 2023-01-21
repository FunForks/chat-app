/**
 * Messages.jsx
 */



import { useState, useEffect, useRef } from 'react'



export const Messages = () => {
  const [ message, setMessage ] = useState("")
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


  const sendMessage = () => {
    if (message) {
      console.log("message:", message);
      
    }
  }


  useEffect(() => {
    inputRef.current.focus()
  }, [])


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
    </div>
  )
}