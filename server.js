//require modules
const express = require('express'); // express module
const mongoose = require('mongoose'); // mongoose module to connect to db
const bodyParser = require('body-parser'); // body parser for json files
const passport = require('passport'); // for login

//assign express module to app var
const app = express();

//passport middleware
app.use(passport.initialize());

//passport config
require('./config/passport')(passport);
//middleware for API
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
app.use(bodyParser.urlencoded({extende: false}));
app.use(bodyParser.json());



//DB config
const db = require('./config/keys').mongoURI;

//connect to mongoDB
mongoose.connect(db).then(() => {
    console.log('Connected to MongoDB succesfully.');
}).catch(err => console.log(err));

//assign port number
const port = process.env.PORT || 5000;

//use API routes 
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

//use function to receive requests
app.listen(port, function(req, res){
    console.log(`Server running on port ${port}`);
})