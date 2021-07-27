const Cart = require('../database/models/cart');

class CartService {

    getCartItems(req,res){
        return Cart.find({});
    }

    async createCart(data){
        const cart = new Cart();
        cart.item = data.item;
        cart.payment = data.payment;
        cart.category = data.category
        return cart.save();
    }
}

// exporting CartService class
module.exports = CartService;