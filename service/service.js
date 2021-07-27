// static data
// let users = [
//     {
//         username: 'hellsent',
//         email: 'hellsent@gmail.com'
//     },
//     {
//         username: 'ayush',
//         email: 'ayush@gmail.com'
//     },
//     {
//         username: 'ayush1',
//         email: 'ayush1@gmail.com'
//     }
// ];

// class AppService {

//     getUsers(req,res){
//         return users;
//     }

//     createUser(user){
//         users.push(user);
//         return user;
//     }

//     getUsersByEmail(email){
//         return users.filter(user => user.email === email);
//     }

//     removeUserByEmail(email){
//         const data = users.filter(user => user.email !== email);
//         users = data;
//         return data; 
//     }
// }

// importing user model
const User = require('../database/models/user');


class AppService {

    getUsers(req,res){
        return User.find({});
    }

    createUser(user){
        users.push(user);
        return user;
    }

    getUsersByEmail(email){
        return users.filter(user => user.email === email);
    }

    removeUserByEmail(email){
        const data = users.filter(user => user.email !== email);
        users = data;
        return data; 
    }

    // updateData(req,res){
    //     return res.status(200).json({});
    // }
}

// exporting AppService class
module.exports = AppService;