var controller = require('./controllers.js');
var router = require('express').Router();

router.get('/movies', controller.get);
router.post('/movies', controller.post);
router.put('/movies', controller.put);
router.delete('/movies', controller.delete);


module.exports = router;