const AppService = require('../service/service');

const service = new AppService();

class AppController{

    async createUser(req,res){
        try{
            const data = await service.createUser(req.body);
            res.status(200).send({
                'message':'user created successfully',
                data
            });    
        }catch(err){
            res.status(500).send(err);
        }

    }

    getUsers(req,res){
        return  service.getUsers().then(data => {
            // res.status(200).send(data);
            
            // reponse
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
        return  service.getUsersByEmail(req.params.email).then(data => {
            res.status(200).send({
                "message":"required data fetched",
                data
            });
        }).catch(err => {
            // catch optional
            res.status(500).send(err);
        });
    }

    filterUserByEmail(req,res){
        const flag = (req.query.email === 'true'?true:false);
        return  service.getUsersByEmail(flag).then(data => {
            res.status(200).send({
                'message':'user removed successfully',
                data
            });
        }).catch(err => {
            // catch optional
            res.status(500).send(err);
        });
    }

    // updateData(req,res){
    //     return res.status(200).json({});
    // }
}

// exporting AppController class
module.exports = AppController;