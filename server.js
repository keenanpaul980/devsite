//require modules
const express = require('express');
const mongoose = require('mongoose');

//require API routes
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

//assign express module to app var
const app = express();
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