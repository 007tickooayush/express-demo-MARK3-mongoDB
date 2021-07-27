const express = require('express');
const router = express.Router();

const AppController = require('../controller/controller');

const controller = new AppController();

router.get('/',(req,res)=>{ controller.getUsers(req,res); })
    .post('/',(req,res)=>{ controller.createUser(req,res); })
    .put('/',(req,res)=>{ controller.updateData(req,res); });

router.get('/:email',(req,res)=>{ controller.getUsersByEmail(req,res); })
    .delete('/:email',(req,res)=>{ controller.removeUserByEmail(req,res); });
    
router.get('/filter?email=true&asc=true',(req,res)=>{ controller.getUsersByEmail(req,res); });




module.exports = router;