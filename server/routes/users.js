const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const auth = require('../middlewares/auth') 


/* GET users listing. */
router.get('/', function(req, res) {
  res.send('users checkpoint');
});

router.post('/signup', userController.signUp)
router.post('signin', userController.signIn)
router.get('/tesjwt', auth.check, userController.tesJwt)

module.exports = router;
