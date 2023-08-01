var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/todos') // => { index: func(), show: func()}

/* GET todos index listing. - http://localhost:3000/todos/ */ 
router.get('/', todosCtrl.index);


/* GET todos show listing. - http://localhost:3000/todos/:id */ 
router.get('/:id', todosCtrl.getOne)

module.exports = router;
