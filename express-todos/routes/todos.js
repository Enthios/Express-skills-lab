var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/todos') // => { index: func(), show: func()}

/* GET todos index listing. - http://localhost:3000/todos/ */ 
router.get('/', todosCtrl.index);

/* GET todos new listing. - http://localhost:3000/todos/new */ 
router.get('/new', todosCtrl.new)

/* GET todos show listing. - http://localhost:3000/todos/:id */ 
router.get('/:id', todosCtrl.getOne)

/* POST todos create listing. - http://localhost:3000/todos */ 
router.post('/', todosCtrl.create)

/* DELETE todos destroying resource - http://localhost:3000/todos/:id */
router.delete('/:id', todosCtrl.delete)
module.exports = router;
