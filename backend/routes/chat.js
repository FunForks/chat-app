var express = require('express');
var router = express.Router();

/* Echo message from POST request */
router.post('/', function(req, res, next) {
  const { message } = req.body
  const timeStamp = new Date().toLocaleTimeString()
  const reply = {
    message,
    timeStamp
  }
  res.send(reply);
});

module.exports = router;
