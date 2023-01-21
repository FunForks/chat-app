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