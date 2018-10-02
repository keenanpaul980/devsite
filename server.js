const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();
//DB config
const db = require('./config/keys').mongoURI;

//connect to mongoDB
mongoose.connect(db).then(() => {
    console.log('Connected to MongoDB succesfully.');
}).catch(err => console.log(err));

app.get('/', function(req, res){
    res.send('Hello!');
})

const port = process.env.PORT || 5000;

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

app.listen(port, function(req, res){
    console.log(`Server running on port ${port}`);
})