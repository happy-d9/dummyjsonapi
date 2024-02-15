var express = require('express');
const { add_post, single_post, search_post, limit, userId, update, delete_post, all_post } = require('../controller/postcontroller');
var router = express.Router();

/* GET posts listing. */
router.post('/', add_post);
router.get('/single_post/:id', single_post);
router.get('/all_post', all_post);
router.get('/search_post/:name',search_post);
router.get('/limit_skip',limit);
router.get('/user/:id',userId);
router.post('/update/:id',update);
router.get('/delete/:id',delete_post);

module.exports=router;