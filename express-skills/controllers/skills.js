
const Skill = require('../models/skills')

module.exports = {
    index,
    getOne: show,
    new: newSkill, 
    create,
    delete: deleteOne
}

function index(req,res,next){
    const contextObject = {
        title: 'All Skills',
        skills: Skill.getAll()
    }
    
    res.render('skills/index', contextObject)
    // respond with a render - skills/index, {title,skills}
}

function show(req,res,next){

    const id = req.params.id 
    
    const contextObject = {
        title: 'A Skill',
        skill: Skill.getOne(id)
    }
    res.render('skills/show', contextObject)
}

function newSkill(req,res){
    res.render('skills/new', {title: 'New Skill'})
}

function create(req,res){
    Skill.create(req.body) 
    res.redirect('/skills')
}


function deleteOne(req, res, next){
    const id = Number(req.params.id)
    Skill.destroy(id)
    res.redirect('/skills')
}