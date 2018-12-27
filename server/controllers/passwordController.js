const Password = require('../models/passwords')
const User = require('../models/user')
const bcrypt = require('bcrypt')
const salt = 10

module.exports = {
    create: (req,res)=>{
        Password.create({
            url: req.body.url,
            username: req.body.username,
            password: req.body.password,
            userid: req.body.userid
        },(err, newPassword)=>{
            if(err){
                res.status(500).json({
                    message: `create new password error ${err}`
                })
            }else{
                res.status(200).json({
                    message: `New password created`,
                    data: newPassword
                })
            }
        })
    },
    readByUserId: (req, res) => {
        
    }
}