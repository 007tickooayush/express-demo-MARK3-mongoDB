const express = require('express');
const router = express.Router();

const CartController = require('../controller/cartController');

const controller = new CartController();

router.get('/',(req,res)=>{ controller.getCartItems(req,res); })
    .post('/',(req,res)=>{ controller.createCart(req,res); });
module.exports = router;