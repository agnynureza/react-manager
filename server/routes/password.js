const express        = require('express');
const router         = express.Router();
const passwordController = require('../controllers/passwordController');

router.get('/findbyid/:id', passwordController.readById)

