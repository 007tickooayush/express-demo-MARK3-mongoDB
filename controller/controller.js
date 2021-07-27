const AppService = require('../service/service');

const service = new AppService();

class AppController{

    createUser(req,res){
        return service.createUser(req.body).then();
        // return res.status(200).json(user);
    }

    getUsers(req,res){
        return  service.getUsers().then(data => {
            // res.status(200).send(data);
            
            // dummy reponse
            res.status(200).send({
                'message':'data fetched',
                data
            });
        }).catch(err => {
            // catch optional
            res.status(500).send(err);
        });
        // return res.status(200).json(data);
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