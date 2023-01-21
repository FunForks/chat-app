# Create a React component to input a chat message #

## Starting the servers
From the root directory of the project, run `npm start` to launch both the frontend and the backend.

## Instructions
1. Create a `components` directory for the frontend  
   _Q: What parent directory should you create this in?_
2. Create a component called `Messages`
3. This component should have a text input element and a Send button
4. Import the Messages component into App.js, so that it is rendered
5. Delete any of the boilerplate code from App.js that is not currently needed
6. In the Messages component, any change in the text input element should update a variable called `message`
   _Q: What React hook(s) will you need?_
7. When you press the Send button, or when you press the Enter key, the current value of `message` should be logged to the Console  
   _Q: What events will you need to capture, and for which elements?_  
   _Q: What property of which event will tell you whether the Enter key has been pressed?_  
   _Q: Which Console will the message be logged in?_ 

Note that there is no requirement to communicate with the backend at this stage.

When you have finished, commit the changes to your branch.
Then you can checkout the next official branch (`git checkout 1.1`) and verify that your version has all the expected new features.