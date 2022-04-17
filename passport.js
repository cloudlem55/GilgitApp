const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const jwtStrategy = require('passport-jwt').Strategy;
const User = require('./models/mainuser');



const cookieExtractor = req => {
    let token = null;
    if(req && req.cookies){
        token = req.cookies['access_token'];
    }
    return token;
}

// admin autherization
passport.use(new jwtStrategy({
    jwtFromRequest: cookieExtractor,
    secretOrKey: "kareem"
},(payload,done)=> {
    User.findById({_id : payload.sub}, (err,user)=>{
        if(err)
        return done(err,false);

        if(user)
        return done(null,user);

        else
        return done(null, false);
    });
}));

//authentication while local strategy taking username and passwowrd
passport.use(new LocalStrategy((username,password,done)=>{
    User.findOne({username}, (err,user) =>{
        //database error
        if(err)
        return done(err);
        //user not found
        if(!user)
        return done(null,false);
        //cheking incrept password
        user.comparePassword(password,done);
    })
}))