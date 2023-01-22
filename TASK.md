# Show message history #

## Starting the servers
From the root directory of the project, run `npm start` to launch both the frontend and the backend.

## Instructions

Edit `frontend/src/components/Messages.jsx` to display the history of incoming messages.

* Add each new incoming message to an array, which you can store as a state `messageHistory` variable
* Create an array of `<li>` elements for each item in `messageHistory`
* Each `<li>` element should show both the message and its timeStamp
* Create a `<ul>` element, to contain these `<li>` elements
* Add CSS to place the text input and button at the bottom of the page, with the message history `<ul>` above it
* Ensure that the `<ul>` element has a scrollbar, if necessary
* Set the `scrollTop` property of the `<ul>` element, so that the last message is always visible... unless the user deliberately scrolls up to re-read previous messages.