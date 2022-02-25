const router = require('express').Router();
const controller = require('../controllers/userController.js');

router.post('/login', controller.login);
router.post('/signup', controller.signup);

module.exports = router;