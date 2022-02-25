const router = require('express').Router();
const user = require('./user.js');
const like = require('./like.js');

router.use('/user', user);
router.use('/like', like);

module.exports = router;