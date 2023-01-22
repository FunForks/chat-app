var express = require('express');
var router = express.Router();

const pollResponses = []


/* Echo message from POST request */
router.post('/', function(req, res) {
  const { message } = req.body
  const timeStamp = new Date().toLocaleTimeString()
  const reply = {
    message,
    timeStamp
  }
  res.send(reply) // reply to calling client

  broadcast(reply) // send message to all connected clients
});


/* Store responses from /poll POST request for later use */
router.post('/poll', function(req, res) {
  pollResponses.push(res)
});


// Use pollResponse to broadcast messages from one client to
// all connected clients
function broadcast(reply) {
  let response
  while (response = pollResponses.shift()) {
    response.send(reply)
  }
}


module.exports = router;
