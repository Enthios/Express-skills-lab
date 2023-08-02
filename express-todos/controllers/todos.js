// import our model data todosDB  -> getAll
const Todo = require('../models/todo') // hint that we will be working with classes in the future

module.exports = {
    index,
    getOne: show,
    new: newTodo, 
    create: createTodo,
    delete: deleteOne
}

function index(req,res){
    // res.send('hitting todos index')
    console.log(res.locals)
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

function newTodo(req,res){
    // the new todo route -renders a new todo form (template)
    res.render('todos/new', {title: 'New Todo'})
}

function createTodo(req,res){
    Todo.create(req.body) 
    //Todo.create() -> modifies the DB
    // res.send(req.body)
    res.redirect('/todos')
}


function deleteOne(req, res){
    // res.send("Deleting Resource"+req.params.id)
    const id = Number(req.params.id)
    Todo.destroy(id)
    res.redirect('/todos')
}
// deleteTodo()
// take an identifier and pass it to our model method
// Todo.destroy
// redirect back to the list of todos