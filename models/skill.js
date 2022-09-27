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

module.exports = {
    getAll,
    getOne
}