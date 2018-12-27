const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    id_fb    : String,
    name     : String,
    username : String,
    password : String,
    email    : String,
    phoneNumber : String,
    gender    : String,
    picture  : String,
})

const User = mongoose.models('User', userSchema)

//middleware check exist account
userSchema.pre('save', function(next){
    let self = this
    if(self.username){
        User.find({
            $or:[
                {email: self.email},
                {username: self.username}
            ]
        })
        .exec()
        .then(user => {
            if (user.length){
                next(new Error('username or email already taken !'))
            }else{
                next()
            }
        })
    }else{
        user.find({
            email: self.email
        })
        .exec()
        .then(user => {
            if(user.length){
                next(new Error('Username or Email already taken !'))
            }else{
                next()
            }
        })
    }
})

module.exports = User