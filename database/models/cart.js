// var Schema = mongoose.Schema;

const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const CartSchemaModel = new Schema({
    item: Number,
    payment: Number,
    category: String
});

module.exports = mongoose.model('Cart', CartSchemaModel);