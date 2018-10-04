const mongoose = require('mongoose'); // load mongoose module to connect to db
const Schema = mongoose.Schema; // assign schema

//create schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

//export modules for other files to see
module.exports = User = mongoose.model('users', UserSchema);