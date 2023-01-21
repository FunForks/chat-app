# Create a React component to input a chat message #

## Starting the servers
From the root directory of the project, run `npm start` to launch both the frontend and the backend.

## Instructions

Create a `/chat` route in the backend and test it with an API client like Postman, Insomnia, or the VS Code extension, Thunder Client.

* Add a file called `chat.js` to the `backend/routes/` directory
* Use it to set up an Express router which will:
  - Handle POST requests to the `/chat` route
  - Read the value of a `message` property in the body of the request
  - Create an object containing this message and a `timeStamp` property whose value should be the current time on the server in HH:MM:SS format
  - Sends this object in response to the request
* Integrate the chat router into the Express app in app.js
* Start your backend
* In your API client, send a POST request to http://localhost:3000/chat with a body such as `{ message: "Hello World" }`
* The API client should receive a response like:
   ```
   { message: "Hello World", timeStamp: "12:34:56" }
   ```