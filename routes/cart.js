var express = require('express');
const { add_cart, single_cart, find_cart, user, update, delete_cart } = require('../controller/cartcontroller');
var router = express.Router();


/* GET carts listing. */
router.post('/', add_cart);
router.get('/all_cart', find_cart);
router.get('/cart/:id', single_cart);
router.get('/userId/:id', user);
router.post('/update/:id', update);
router.get('/delete/:id', delete_cart);

module.exports = router;
