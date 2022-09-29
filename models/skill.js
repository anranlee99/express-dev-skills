const skills = [
    {skill: 'HTML', experience: '3 weeks'},
    {skill: 'CSS', experience: '3 weeks'},
    {skill: 'JavaScript', experience: '3 weeks'},
    {skill: 'Express', experience: '1 week'},
    {skill: 'node.js', experience: '1 week'},
]

function getAll(){
    return skills;
}

function getOne(id) {
    return skills[id];
}

function create(skillName, skillExperience) {
    let obj = {}
    obj.skill = skillName
    obj.experience = skillExperience
    skills.push(obj)
}

function deleteOne(id) {

    skills.splice(id, 1);
}

function edit(id) {
    return getOne(id)
}
function updateOne(id, obj) {
    console.log(obj)
    let skillToUpdate = getOne(id)
    skillToUpdate.skill = obj.skillName;
    skillToUpdate.experience = obj.skillExperience;

}

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    edit,
    updateOne
}