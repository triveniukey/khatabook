const { response } = require("express");
const  jwt  = require("jsonwebtoken");
const userModel = require("../models/userModel");

module.exports.isloggedIn = async function(req, res, next) {
    if(req.cookies.token){
        try{
            let decoded = jwt.verify(req.cookies.token,process.env.JWT_KEY);
            let user = await userModel.findOne({email: decoded.email}).select("-password");
            req.user = user;
            next();
        }
        catch(err){
            return res.redirect("/");
        }
    }
    else{
        return res.redirect("/");
    }
}

module.exports.redirectIfLoggedIn = function(req, res, next) {
    if(req.cookies.token){
        try{
        let decoded = jwt.verify(req.cookies.token,process.env.JWT_KEY);
        res.redirect("/profile");
        }
        catch(err){
           return next();
        }
    }
    else return next();
};