const express = require('express');
const router = express.Router();
const {
    landingPageController,
    registerPageController,
    registerController,
    loginController,
    logoutController,
    profileController
} = require('../controllers/indexController');
const { isloggedIn, redirectIfLoggedIn } = require('../middlewares/auth-middlewares');

router.get('/',redirectIfLoggedIn ,landingPageController);
router.get('/register', registerPageController);
router.get('/logout', logoutController);
router.get('/profile',isloggedIn, profileController);

router.post('/register', registerController);
router.post('/login', loginController);

module.exports = router;