const express = require('express');
const router = express.Router();
const { createHisaabController, hisaabPageController, readHisaabController, readVerifiedHisaabController, deleteController, editController, editPostController } = require('../controllers/hisaabController');

const { isloggedIn, redirectIfLoggedIn } = require('../middlewares/auth-middlewares');

router.get('/create', isloggedIn,hisaabPageController);
router.post('/create', isloggedIn ,createHisaabController);

router.get('/delete/:id', isloggedIn, deleteController);

router.get('/edit/:id', isloggedIn, editController);
router.post('/edit/:id', isloggedIn, editPostController);

router.get('/view/:id', isloggedIn, readHisaabController);
router.get('/:id', readVerifiedHisaabController);

module.exports = router;