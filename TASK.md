# Make a POST request in the frontend and display the response #

## Starting the servers
From the root directory of the project, run `npm start` to launch both the frontend and the backend.

## Instructions
* Create an `api` directory
  _Q: Where?_

* In this directory create a file called `requests.js`

* Use this to create a module with a `post()` function that:
  - Accepts the parameters `endpoint`, `message` and `callback`
  - Makes a POST request to the given `endpoint` with the given `message`
  _Q: Is the backend expecting the `message` to be a string or an object?`
  - Calls the `callback` function with the response from the request  
  _Q: What command and what options will you use to make the POST request?_  
  _Q: How will you deal with the asynchronous nature of the request?_  
  _Q: How will you extract the response from the ReadableStream object that is sent as the response?_  

* Edit the Messages component in the frontend to:
  - Make a call to the `post()` function when the Send button is activated  
  _Q: How will the Messages component receive a pointer to the `post` function?_  
  _Q: How will the Messages component know which endpoint to use?_   
  - Add a function called `showIncomingMessage` to pass as the callback argument for `post()`
  - Empty the text input after the message has been sent
  - Create a `<p>` element to display the result of the POST request
  - Use the `showIncomingMessage` function to display the `message` and the `timeStamp` from the backend's response  
  _Q: Will you need to use any hooks to do this?_
  _Q: How will you lay out and style the two parts of the response in the `<p>` element?_

Test this by sending different messages and checking that the display in the `<p>` element updates and shows the timeStamp added by the backend.

If you open http://localhost:3001 in more than one browser window, and send different messages from each, you will see that each window only receives its own messages. In the next step, you will get all connected clients to display the latest message received by the backend.