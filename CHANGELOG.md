# Use long polling to retrieve messages #
    
A message sent by one client is displayed by all

frontend/
* Add startPolling() function to src/api/requests.js
  - Makes a POST request to an endpoint each time it receives a response.
  - Sends no body
  - Calls a callback to treat each incoming response
  - Starts polling automatically
* src/App.js
  - Import useState and useEffect from react
  - Add a `poll` endpoint
  - Add newMessage to update the incoming state variable
  - Import startPolling and call it after first render, with endpoint and newMessage as its arguments
  - Pass the new `incoming` state to Messages
* src/components/Messages.jsx
  - Access `incoming` as a prop
  - Comment out references to the previous `incoming` state variable