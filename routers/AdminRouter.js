const express = require('express');
const adminRouter = express.Router();
const passport = require('passport');
const passportConfig = require('../passport');
const JWT = require('jsonwebtoken');
const User = require('../models/mainuser');


const signToken = userID => {
    return JWT.sign({
        iss: "kareem",
        sub: userID
    },"kareem", {expiresIn: "1h"});
}

adminRouter.post('/register', (req, res) => {
    const {username,password,role} = req.body;
    User.findOne({username}, (err, user) => {
        if(err)
        res.status(500).json({message: {msgBody: 'somthing went wrong', msgError:true}})
        
        if(user)
        res.status(400).json({message: {msgBody: 'user is already exit', msgError:true}})

        else {
            const newUser = new User({
                username,password,role
            });
            newUser.save(err => {
                if(err)
                res.status(500).json({message: {msgBody: 'somthing went wrong', msgError:true}})

                else
                res.status(201).json({message: {msgBody: 'succesfly added', msgError:false}})
            })
        }
    })
});

adminRouter.post('/login',passport.authenticate('local',{session:false}), (req,res)=>{
    if(req.isAuthenticated()) {
        const {_id,username,role} = req.user;
        const token = signToken(_id);
        res.cookie('access_token',token,{httpOnly: true, sameSite: true});
        res.status(200).json({isAuthenticated: true, user: {username,role}});
    }
});

adminRouter.get('/logout',passport.authenticate('jwt',{session:false}), (req,res)=>{
   res.clearCookie('access_token');
   res.json({user:{username : "", role :""},success : true});
});

adminRouter.get('/admin', passport.authenticate('jwt',{session : false}),(req, res) => {
    if(req.user.role === 'admin'){
        res.status(200).json({message : {msgBody : "your admin panel,", msgError : false}});
    }
    else
        res.status(403).json({message : {msgBody : "you are not admin", msgError : true}});
});

adminRouter.get('/authenticated', passport.authenticate('jwt',{session : false}),(req, res) => {
  const {username,role} = req.user;
  res.status(200).json({isAuthenticated : true, user : {username, role}});
})

module.exports = adminRouter;