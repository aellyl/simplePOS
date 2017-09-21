var express=require("express");
var passport = require('passport');
// var flash    = require('connect-flash');
//var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var secrets = require("./config/sessionSecret.js");

//------------------------------

const app=express();

//----------------------------

//for heroku deployment
var port = process.env.PORT || 3001;

//-----------------------------
//require models 
 var db=require("./models");


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// set up our express application
//app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
// app.use(bodyParser()); // get information from html forms

//------------------------------------------------
require('./config/passport')(passport); // pass passport for configuration

// required for passport
const sess = {
    resave: true,
    saveUninitialized: true,
    secret: secrets.sessionSecret,
}
app.use(session(sess)); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
//app.use(flash()); // use connect-flash for flash messages stored in session

//enalbe CORS for Dev
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// Import routes and give the server access to them.
require('./controllers/users_controllers.js')(app, passport);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
});