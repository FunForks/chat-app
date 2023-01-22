export const post = (endPoint, message, callback) => {
  if (typeof message !== "object") {
    message = { message }
  }

  try {
    message = JSON.stringify(message)

  } catch(error) {
    // The object may have included recursive references
    return console.log("POST error:", error);
  }


  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: message
  }


  fetch(endPoint, options)
    .then(response => response.json())
    .then(json => callback(json))
    .catch(error => console.log("FETCH error:", error))
}


export const startPolling = (endpoint, callback) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  }

  const keepPolling = () => {
    fetch(endpoint, options)
    .then(response => response.json())
    .then(json => callback(json))
    .then(keepPolling) // immediately start waiting for a new update
    .catch(error => {
      // Don't poll again if there is an error
      console.log("error:", error)
    })
  }

  keepPolling()
}