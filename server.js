var express = require('express');
var app = express();

var port     = process.env.PORT || 3000;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var configDB = require('./config/db.js');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database

// require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms


// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

app.listen(port, () => {
  console.log('Example app listening on port' + port +'!');
});

// NEXT STEP: 
/* 
You were using this: https://scotch.io/tutorials/easy-node-authentication-setup-and-local
- Figure out what flash messages are
- Figure out how to create new users
- May need to learn more about how passport actually works, particularly how it works with the DB

*/