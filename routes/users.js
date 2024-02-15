var express = require('express');
const { add_user, all_user, single_user, search_user, filter_user, limit, user_id, update, delete_user, user_post } = require('../controller/usercontroller');
var router = express.Router();

/* GET users listing. */
router.post('/', add_user);
router.get('/all_user', all_user);
router.get('/single_user/:id',single_user);
router.get('/search_user/:name',search_user);
router.get('/filter_user/:name',filter_user);
router.get('/limit',limit);
router.get('/userId/:id/cart',user_id);
router.get('/userId/:id/post',user_post);
router.post('/update/:id', update);
router.get('/delete/:id', delete_user);

module.exports = router;