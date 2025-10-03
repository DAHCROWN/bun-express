var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("Hello, World!");
  res.status(200).send({
    message: 'Hello, World!'
  });
  // res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  const name = req.body.name || 'World';
  res.status(201).send({
    message: `Hello, ${name}!`
  });
});

module.exports = router;
