var express = require('express');
var router = express.Router();

/* GET todos index listing. - http://localhost:3000/todos/ */ 

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET todos show listing. - http://localhost:3000/todos/:id */ 

module.exports = router;
