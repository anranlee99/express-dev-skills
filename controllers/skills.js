const Skills = require('../models/skill');

module.exports = {
    index,
    show
}

function index(req, res){
    res.render('skills/index', {
        title: 'Skills',
        skills: Skills.getAll()
    })
}

function show(req, res){
    console.log('id',typeof req.params.id)
    res.render('skills/show', {
        
        skills: Skills.getOne(req.params.id),
        // title: 'skill',
        title: Skills.getOne(req.params.id).skill,
    })
}