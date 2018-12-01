var express = require('express');
var router = express.Router();
var PlayerController = require('../Controllers/PlayerController');

router.post('/',PlayerController.post);

module.exports=router;