var express = require('express');
var router = express.Router();
// isolated our routes for all routes starting with / to this file
// server.js - app.use('/', indexRouter)

/* GET test route - /test-route -> 'hitting test route' */ 
router.get('/test-route', function(req,res, next){
  res.send('hitting test route')
})


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Todos' });
});

module.exports = router;
