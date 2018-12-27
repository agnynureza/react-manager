const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const saltRound = 10

module.exports = {
    signUp :(req,res) =>{
        let userPassword = bcrypt.hashSync(req.body.password, saltRound)

        User.create({
            username : req.body.username,
            password : userPassword,
            name     : req.body.name,
            email    : req.body.email,
            gender   : req.body.gender,
            picture  : req.body.picture || null
        },(err, user)=> {
            if(err){
                res.status(500).json({
                    message: `Fail to create new account ! ${err.message}`,
                    data: {}
                })
            }else{
                let token = jwt.sign({userid: user._id}, process.env.SECRET)
                res.status(200).json({
                    message: "Sign up success !",
                    data : {
                        id: user._id,
                        email: user.email,
                        name: user.name,
                        token: token
                    }
                })
            }
        })
    },
    signIn :(req,res) => {
        User.findOne({
            $or: [
                {username: req.body.username_email},
                {email: req.body.username_email}
            ]
        })
        .exec()
        .then(userData=> {
            if(userData){
                let passwordCheck = bcrypt.compareSync(req.body.password, userdata.password)
                if (passwordCheck){
                    let token = jwt.sign({userid : userData._id}, process.env.SECRET)
                    res.status(200).json({
                        message:'Sign in Success !',
                        data :{
                            id : userData._id,
                            name     : userData.name,
                            username : userData.username,
                            email : userData.email,
                            gender : userData.gender,
                            token: token
                        }
                    })
                }else{
                    res.status(202).json({
                        message: 'Sign in failed, username/email or password wrong',
                        data : null
                    })
                }
            }else{
                res.status(202).json({
                    message: 'Sign in failed, username/email not exist',
                    data: null
                })
            }
        })
        .catch(err=> {
            res.status(500).json({
                message: `Error occured on getting users data ${err}`
            })
        })
    },
    tesJwt: (req,res) => {
        res.status(200).json({
            message : `you have privilege to acces here`
        })
    }
}