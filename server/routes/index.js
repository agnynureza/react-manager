const express = require('express');
const router = express.Router();
const users = require('./users')
const passwords = require('./password')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Express on' );
});

router.use('/api/users', users)
router.use('/api/passwords', passwords)



module.exports = router;
