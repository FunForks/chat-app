import { useState, useEffect } from 'react'

import { Messages } from './components/Messages'
import { post, startPolling } from './api/requests'



const backend = process.env.REACT_APP_BACKEND
const endpoints = {
  chat: `${backend}/chat`,
  poll: `${backend}/chat/poll`
}


const App = () => {
  const [ incoming, setIncoming ] = useState({})


  const newMessage = message => {
    setIncoming(message)
  }


  useEffect(() => startPolling(endpoints.poll, newMessage), [])


  return (
    <Messages
      endpoint={endpoints.chat}
      post={post}
      incoming={incoming}
    />
  );
}


export default App;
