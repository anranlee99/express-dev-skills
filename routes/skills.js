var express = require('express');
var router = express.Router();

//require controller that export Skills CRUD functions
const skillsCtrl = require('../controllers/skills')
/* GET users listing. */
router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
router.get('/:id/edit', skillsCtrl.edit)
router.put('/:id', skillsCtrl.update)
router.delete('/:id', skillsCtrl.delete)
router.get('/:id', skillsCtrl.show);
router.post('/', skillsCtrl.create);



module.exports = router;
