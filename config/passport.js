const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt'.ExtractJWT);
const mongoose = request('mongoose');
const User = mongoose.model('users');
const keys = require('../../config/keys');