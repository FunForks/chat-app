# Use long polling to retrieve messages #

## Starting the servers
From the root directory of the project, run `npm start` to launch both the frontend and the backend.

## Instructions

You are going to create the frontend part of the long polling feature. This means creating a function that will send a POST request to the `/chat/poll` endpoint in the backend each time a response is received for the previous request. You'll use a callback function to treat the latest response to update browser page.

In the frontend/src/api/requests.js file:
* Create and export a function called `startPolling`
* The `startPolling` function should have two parameters:
  - `endPoint` (this will be set to http://localhost:3000/chat/poll)
  - `callback` (a callback function)
* Inside the `startPolling` function, create a function called `keepPolling` which:
  - Sends a POST request to the given endpoint
  - Calls the `callback` function with the data from the response
  - Sends a new POST request as soon as it has treated the response from the previous one
* Start the polling process by calling the `keepPolling` function a first time. (It should call itself recursively each time it receives a response.)

The response to the POST request will be an object with the form `{ message: <string>, timeStamp: <string> }`. You will need to forward this response to the Messages component, so that it can be displayed. One way of doing this is to get the App component to pass the object to Messages.

In the frontend/src/App.js script:
* Define a second endpoint for `/chat/poll`. A good way to do this would be to create an constant called `endpoints` whose value is an object like...
  ```
  { chat: `${backend}/chat`,
    poll: `${backend}/chat/poll`
  }
... and share the `chat` endpoint with the Messages component and the `poll` endpoint with the `startPolling` function.
* Import the `startPolling` function
* Create a new function called `newMessage` to use as the callback for the `startPolling` function
* Call the `startPolling` function with the appropriate arguments
* Create a new useState variable called `incoming`, and update its value each time the `newMessage` function is called
* Send the latest value of the `incoming` variable as a prop to Messages

When a client sends a message to the backend, it will now receive two responses: one for the message sent using `post`, and one that is broadcast to all connected clients, through the long polling mechanism.

You can alter the code of the Messages component, so that only the response received through the long polling mechanism is displayed. (In a future step, you can use the response from the original `post` request to display a check mark, to confirm that the message was received by the server.)

In the frontend/src/components/Messages.jsx script:
* Read in the new `incoming` prop
* Comment out the useState for the existing `incoming` prop
* Comment out the line `setIncoming({ message, timeStamp })` in the `treatIncomingMessage` function

Messages should now render the `incoming` message sent as a prop, and do nothing when it receives a callback from `post`.

If you open http://localhost:3001 in more than one browser window, and send different messages from each, you should see that all the windows now update to show the new message.