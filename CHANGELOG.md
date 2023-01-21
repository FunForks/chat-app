# Make POST request and display backend response #
    
* Create src/api/requests.js
  - Add post() function to make fetch request and callback with the response

* Edit App.js
  - Import post from requests.js
  - Create endpoint for /chat route
  - Send endpoint and post to Messages as props

* Edit Messages.jsx
  - Add parameterl for endpoint and post
  - Use useState to handle incoming messages
  - Add treatIncomingMessage to setIncoming after post callback
  - Call setMessage("") after call to post( ... message ... )
  - Add a <p> element which will be displayed if there is an incoming message
  - Create a style object for styling the <p> element