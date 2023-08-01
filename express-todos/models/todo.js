const todos = [
  { id: 125223, todo: "Feed Dogs", done: true },
  { id: 127904, todo: "Learn Express", done: false },
  { id: 139608, todo: "Buy Milk", done: false },
];

module.exports = {
  getAll,
  getOne
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