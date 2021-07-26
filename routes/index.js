const express = require('express');
const router = express.Router();

const AppController = require('../controller/controller');

const controller = new AppController();

router.get('/user',(req,res)=>{ controller.getUsers(req,res); });
router.get('/user/:email',(req,res)=>{ controller.getUsersByEmail(req,res); });
router.post('/user',(req,res)=>{ controller.createUser(req,res); });
router.delete('/user/:email',(req,res)=>{ controller.removeUserByEmail(req,res); });
router.put('/user',(req,res)=>{ controller.updateData(req,res); });


module.exports = router;