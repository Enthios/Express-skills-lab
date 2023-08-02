const todos = [
  { id: 125223, todo: "Feed Dogs", done: true },
  { id: 127904, todo: "Learn Express", done: false },
  { id: 139608, todo: "Buy Milk", done: false },
];

module.exports = {
  getAll,
  getOne,
  create,
  destroy: deleteOne
};

function getAll() {
  return todos;
}

function getOne(id){
  // use an array method that will return a value based on a filter
  id = Number(id) 
  // req.params.id is always a string 
  // to make a valid search (find) - we need our id to be a number
  // the Number() constructor function will take another data type and try to convert it to a number
  // if a value such as 'cat' is passed it -it will return NaN

  // Debugging our todos.find() method query
  // console.log('looking for ', typeof id, id)
  // console.log('found todo', todos.find(todo=>todo.id === id))
  
  return todos.find(todo=>todo.id === id)
}

function create(data){

  const newTodo = {...data} // capture the data (JS object)
  newTodo.done = data.done ? true : false 
  // conditionally update the new object with a done property (boolean)
  // boolean is used by our template - no property -> template error 
  newTodo.id = Date.now() % 1000000
  // creating new id
  todos.push(newTodo)
  
}

// destroy - provided an id -> find the index of the resource and change/update the db
function deleteOne(id){
  // how can I find the position in an array for an object based on its property? 
  const todoPosition = todos.findIndex(function(todo){
    return todo.id === id
  })
  console.log(todoPosition)

  todos.splice(todoPosition, 1) // splice modify an array based its arguments
  //splice(idx, resourceToDel, valuesToAdd)
  // code is working!
}