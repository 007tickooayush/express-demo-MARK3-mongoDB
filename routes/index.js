const express = require('express');
const router = express.Router();
const userRouter = require('./user');
const cartRouter = require('./cart');
const defaultRouter = require('./default');

router.use('/user',userRouter);
router.use('/cart',cartRouter);
router.use('/',defaultRouter);
module.exports = router;