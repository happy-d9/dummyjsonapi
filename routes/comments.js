var express = require('express');
var router = express.Router();
const { add_com } = require('../controller/commentcontroller');

/* GET posts listing. */
router.post('/', add_com);

module.exports=router;