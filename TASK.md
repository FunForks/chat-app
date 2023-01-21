# Use long polling #

## Starting the servers
From the root directory of the project, run `npm start` to launch both the frontend and the backend.

## Instructions

You are going to create the backend part of the long polling feature. This means creating a system to store the `response` objects from incoming requests to a `/chat/poll` route, rather than using them to send a reply immediately. When a message is received from one client on the standard `/chat` route, you will use the stored responses from the `/chat/poll` route to broadcast the message to other clients.

In backend/routes/chat.js script:
* Add a variable called `pollResponses` whose value is an empty array
* Add a new `/poll` route, which
  - Accepts POST requests
  - Pushes the `response` object from the incoming request into the `pollResponses` array, so that you can send a response to the request at an arbitrary time in the future
* Modify the function for the `/` route so that it also calls a `broadcast` function with the `reply` object as an argument 
* Create a `broadcast` function which will:
  - Iterate through the responses stored in the `pollResponses` array
  - Use each response to send the `reply` to the client that made the associated `/poll` request
  - Remove the used response from `pollResponses`

To test whether your code is working:
1. Use an API REST client like Postman or Thunder Client to send a POST request to http://localhost:3000/chat/poll. (This request will not receive an immediate response.)
2. Use your current browser client to send a message request to http://localhost:3000/chat. At this point, your API client should receive a response to the `/chat/poll` request.

You will have to manually send a new POST request to http://localhost:3000/chat/poll from your API client if you want to receive a new message sent from the browser.

In the next step, you will be editing the frontend code to send such new POST requests automatically as soon as a response is received.