import { useState, useEffect } from 'react'

const backend = process.env.REACT_APP_BACKEND
const endPoint = `${backend}/users`

const App = () => {
  const [ response, setResponse ] = useState("")

  const getResponse = async() => {
    const response = await fetch(endPoint)
    response.text()
             .then(text => setResponse(text))

  }

  useEffect(() => getResponse(), [])

  return (
    <>
      <h1>Your React app goes here</h1>
      <p>Backend endPoint: <a href={endPoint}>{endPoint}</a></p>
      <p>Response from endPoint: "{response}"</p>
    </>
  );
}

export default App;
