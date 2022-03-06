const router = require('express').Router();
const controller = require('../controllers/likeController.js');

router.get('/', controller.getLikeCnt);
router.post('/add', controller.insertLike);
router.post('/cancel', controller.deleteLike);

module.exports = router;