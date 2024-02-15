var express = require('express');
const { add_pro, add_pro_find, single_pro,search_pro, limit, category, single_cat, update,delete_pro } = require('../controller/indexcontroller');
var router = express.Router();

/* GET home page. */
router.post('/add_product', add_pro);
router.get('/products', add_pro_find);
router.get('/products/:id', single_pro);
router.get('/search_products', search_pro);
router.get('/limit', limit);
router.get('/categories', category);
router.get('/category/:name', single_cat);
router.post('/update/:id', update);
router.get('/delete/:id', delete_pro);

module.exports = router;