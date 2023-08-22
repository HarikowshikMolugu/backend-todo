const express = require('express');
const authenticationController = require("../controllers/authenticationController")

const router = express.Router();

router.post('/user/register',authenticationController.createUser);
router.get('/user/login/:username/:password',authenticationController.loginUser);

module.exports = router;
