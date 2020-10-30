var express = require('express');
var router = express.Router();
const controller = require("../controllers/mainController")
const cookieCheck = require('../middlewares/cookieCheck')

router.get("/", cookieCheck,controller.index)

module.exports = router;
