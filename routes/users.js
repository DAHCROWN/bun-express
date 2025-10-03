var express = require('express');
var router = express.Router();

/* GET users listing. */
router.route('/', function(req, res, next) {
  res.send('respond with a resource');
})
.get(function(req, res, next) {
  res.send('GET request to the users');
})
.post(function(req, res, next) {
  res.send('POST request to the users');
})
.put(function(req, res, next) {
  res.send('PUT request to the users');
})
.delete(function(req, res, next) {
  res.send('DELETE request to the users');
});

module.exports = router;
