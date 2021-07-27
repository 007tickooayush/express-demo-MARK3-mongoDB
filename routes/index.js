const express = require('express');
const router = express.Router();
const userRouter = require('./user');
const cartRouter = require('./cart');

router.use('/user',userRouter);
router.use('/cart',cartRouter);

module.exports = router;