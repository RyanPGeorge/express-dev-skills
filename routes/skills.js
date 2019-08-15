var express = require('express');
var router = express.Router();

router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);
router.get('/:id/edit', skillsCtrl.edit);
router.post('/', skillsCtrl.create);
router.delete('/:id', skillsCtrl.delete);
router.put('/:id', skillsCtrl.update);

/* GET users listing.
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); */

module.exports = router;
