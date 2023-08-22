const skills = [
  { id: 1000001, skill: 'HTML', mastered: true },
  { id: 1000002, skill: 'CSS', mastered: true },
  { id: 1000003, skill: 'JavaScript', mastered: true },

module.exports = {
  getAll,
  getOne,
  create,
  destroy: deleteOne
};

function getAll() {
  return skills;
}

function getOne(id){
  id = Number(id) 
  return skills.find((skill)=>skill.id === id)
}
  
  return todos.find(todo=>todo.id === id)


function create(data){

  const newSkill = {...data}
  newSkill.done = data.done ? true : false 
  newSkill.id = Date.now() % 1000000
  skills.push(newSkill)
  
}

// destroy - provided an id -> find the index of the resource and change/update the db
function deleteOne(id){
id = Number(id);
const removedSkill = skills.findIndex((skill)=>skill.id===id)
console.log(removedSkill)
skills.splice(removedSkill,1)
}