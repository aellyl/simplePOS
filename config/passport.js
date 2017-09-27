// config/passport.js
var bCrypt = require('bcrypt-node');

// load all the things we need
var LocalStrategy = require('passport-local').Strategy;

// load up the user model
var db = require('../models');

// expose this function to our app using module.exports
module.exports = function (passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function (id, done) {
        db.user.findById(id, function (err, user) {
            done(err, user);
        });
    });



    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-login', new LocalStrategy({
        passReqToCallback: true
    },
        function (req, username, password, done) { // callback with email and password from our form


            var isValidPassword = function (userpass, password) {

                return bCrypt.compareSync(password, userpass);

            }

            db.user.findOne({
                where: {
                    username: username
                                }
            }).then(function (user) {
                //console.log("in passport login strag, user: ",user);
                if (!user) {

                    return done(null, false, {
                        message: 'Username does not exist'
                    });

                }

                if (!isValidPassword(user.password, password)) {

                    return done(null, false, {
                        message: 'Incorrect password.'
                    });

                }else{
                   // console.log("correct password");
                    db.user.update({last_login: Date.now()},{
                        where:{ username:username }
                    }).then(function(result){
                        console.log("in passport login, update last login: ", result);
                    });

                    return done(null,user);
                }



            });


        }));

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-signup', new LocalStrategy({
        passReqToCallback: true
    },
        function (req, username, password, done) {

            var generateHash = function (password) {

                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);

            };
            //console.log("inside passport.js req: ",req);

            db.user.findOne({
                where: {
                    username: username
                }
            }).then(function (user) {

                if (user) {

                    return done(null, false, {
                        message: 'That email is already taken'
                    });

                } else {

                    var userPassword = generateHash(password);

                    var data =

                        {
                            username: username,

                            password: userPassword,

                            fname: req.body.fname,

                            lname: req.body.lname,
                            email: req.body.email,
                            rol: req.body.role

                        };

                    db.user.create(data).then(function (newUser, created) {

                        if (!newUser) {

                            return done(null, false);

                        }

                        if (newUser) {
                            console.log("User register successful");

                            return done(null, newUser);

                        }

                    });

                }

            });

        }));

};

