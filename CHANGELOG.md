# Add /poll route to broadcast messages #

In backend/routes/chat.js:
* Add `pollResponses` array
* Add call to `broadcast(reply)` to the function for `/`
* Add a function for the route `/poll` which saves responses in the `pollResponses` array
* Add a broadcast(reply) function that uses the responses stored in `pollResponses` to send a reply to all connected clients