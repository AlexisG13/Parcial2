var express = require('express');
var router = express.Router();
var PlayerController = require('../Models/PlayerModel');

router.post('/',PlayerController.post);

module.exports=router;