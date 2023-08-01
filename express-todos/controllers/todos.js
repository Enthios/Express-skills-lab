// import our model data todosDB  -> getAll
const Todo = require('../models/todo') // hint that we will be working with classes in the future

module.exports = {
    index,
    getOne: show
}

function index(req,res){
    // res.send('hitting todos index')
    const contextObject = {
        title: 'All To Dos', // "" - title is a variable in our template
        todos: Todo.getAll() // [ ] - todos is a variable in our template
    }
    res.render('todos/index', contextObject)
    // respond with a render - todos/index, {title, todos}
}

function show(req,res){
    // res.send('hitting show route: '+req.params.id)
    // show template

    const id = req.params.id 
    
    const contextObject = {
        title: 'Show Page',
        todo: Todo.getOne(id) // identify the particular todo
    }
    res.render('todos/show', contextObject)
}

