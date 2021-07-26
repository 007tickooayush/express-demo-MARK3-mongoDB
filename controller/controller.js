const AppService = require('../service/service');

const service = new AppService();

class AppController{

    createUser(req,res){
        const user = service.createUser(req.body);
        return res.status(200).json(user);
    }

    getUsers(req,res){
        const data = service.getUsers();
        return res.status(200).json(data);
    }

    getUsersByEmail(req,res){
        const data  = service.getUsersByEmail(req.params.email);
        res.status(200).json(data);
    }

    removeUserByEmail(req,res){
        const data  = service.getUsersByEmail(req.params.email);
        res.status(200).json(data);
    }

    // updateData(req,res){
    //     return res.status(200).json({});
    // }
}

// exporting AppController class
module.exports = AppController;