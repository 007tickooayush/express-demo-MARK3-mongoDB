// var Schema = mongoose.Schema;

const mongoose = require('mongoose');

const UserModelSchema = new mongoose.Schema({
    username: {type: String},
    email:{type: String},
    host: {type: String}
});

// modeule.exports =
mongoose.model('User', UserModelSchema);