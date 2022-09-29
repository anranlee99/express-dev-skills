const Skills = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    update,
    delete: deleteSkill,
    edit
}

function index(req, res){
    res.render('skills/index', {
        title: 'Skills',
        skills: Skills.getAll()
    })
}

function show(req, res){

    res.render('skills/show', {
        
        skills: Skills.getOne(req.params.id),
        id: req.params.id,
        title: Skills.getOne(req.params.id).skill,
    })
}

function newSkill(req, res){
    res.render('skills/new', {
        title: 'New Skill',
    })
}

function create(req, res){
    console.log('req body', req.body)
    Skills.create(req.body.skillName, req.body.skillExperience)
    res.redirect('/skills')
}

function update(req, res){
    Skills.updateOne(req.params.id, req.body);

    res.redirect(`/skills/${req.params.id}`)
}

function edit(req, res){
    res.render('skills/edit', {
        skill: Skills.getOne(req.params.id),
        id: req.params.id,
        title: 'Edit Skill'
    });
}

function deleteSkill(req, res){
    console.log(req.params.id)
    Skills.deleteOne(req.params.id);


    res.redirect('/skills');
}