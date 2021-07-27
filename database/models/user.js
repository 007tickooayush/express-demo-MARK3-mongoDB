// var Schema = mongoose.Schema;

const UserModelSchema = new mongoose.Schema({
    username: String,
    email: String,
    host: String
});

modeule.exports = mongoose.model('User', UserModelSchema);