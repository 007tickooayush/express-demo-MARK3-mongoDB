// var Schema = mongoose.Schema;

const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const UserModelSchema = new Schema({
    username: {type: String},
    email:{type: String},
    host: {type: String}
});

module.exports = mongoose.model('User', UserModelSchema);