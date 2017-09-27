//load models
var db = require('../models');

module.exports = function(app, passport) {

        app.get("/user/:username", function(req,res){
            db.user.findOne({
                where: {
                    username: req.params.username
                                }
            }).then(function (user){
                if(user)
                    return res.json(user);
            })
        });

        //logout button is clicked
        app.get('/logout', function(req, res, next) {
            
            console.log("logout: ", req.body);
            req.logout();
            return res.json({ success: true })
        });

             
        
    // process the signup form
     app.post('/register', function(req, res, next) {
        //console.log("in /register: req: ", req.body);
        passport.authenticate("local-signup", function(err, user, info) {		
                    console.log("inside autheticate local-signup err, user,info: ", err,user,info);

                    if(err) return next(err)
                    if(!user) {
                        return res.json({ success: false, message: info.message })			
                    }
           		
                    req.logIn(user, loginErr => {
                        if(loginErr) {
                            return res.json({ success: false, message: loginErr })
                        }
                        return res.json({ success: true, message: "authentication succeeded" })
                    })
                })(req, res, next)
    
    }
    );

     // process the login form
     app.post('/login', function(req, res, next) {
        // Do email and password validation for the server
        //console.log("in /login: req: ", req.body);
        passport.authenticate("local-login", function(err, user, info) {		
    
            if(err) return next(err)
            if(!user) {
                return res.json({ success: false, message: info.message })			
            }
            // ***********************************************************************
            // "Note that when using a custom callback, it becomes the application's
            // responsibility to establish a session (by calling req.login()) and send
            // a response."
            // Source: http://passportjs.org/docs
            // ***********************************************************************		
            // Passport exposes a login() function on req (also aliased as logIn())
            // that can be used to establish a login session		
            req.logIn(user, loginErr => {
                if(loginErr) {
                    return res.json({ success: false, message: loginErr })
                }
                return res.json({ success: true, message: "authentication succeeded" })
            })
        })(req, res, next)
    }
    );


    };
    