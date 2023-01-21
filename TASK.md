# Create a React component to input a chat message #

## Starting the servers
From the root directory of the project, run `npm start` to launch both the frontend and the backend.

## Instructions

Make a POST request in the frontend and display the response

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
  - Add a function to pass as the callback argument for `post()`
  - Render a `<p>` element which will display the result of the POST request
  - In this callback function, display the `message` and the `timeStamp` from the backend's response  
  _Q: How will you layout and style the two parts of the response in the `<p>` element?_

Test this by sending different messages and checking that the display in the `<p>` element updates and shows the timeStamp added by the backend.