const CartService = require('../service/cartService');

const service = new CartService();

class CartController{

    async createCart(req,res){
        try{
            const data = await service.createCart(req.body);
            res.status(200).send({
                'message':'cart created successfully',
                data
            });    
        }catch(err){
            res.status(500).send(err);
        }
    }

    getCartItems(req,res){
        return  service.getCartItems().then(data => {
            // res.status(200).send(data);
            
            // reponse
            res.status(200).send({
                'message':'cart data fetched',
                data
            });
        }).catch(err => {
            // catch optional
            res.status(500).send(err);
        });
        // return res.status(200).json(data);
    }
}

// exporting AppController class
module.exports = CartController;