const express = require('express'); // load express module
const router = express.Router(); // for routing
const gravatar = require('gravatar'); // for email and avatar
const bcrypt = require('bcryptjs'); // for password encryption

//load User model from ../../models/User
const User = require('../../models/User');

//@route        GET api/users/test
//@description  Tests users route
//@access       Public
//sample for routing
router.get('/test', function(req, res) {
    res.json({
        msg: "Users workss"
    });
});

//@route        GET api/users/register
//@description  Register a user
//@access       Public
router.post('/register', function(req, res){
    User.findOne({email : req.body.email}) // compare email to from db
    .then(user => {
        if(user){ // return erro 404 if email already exists
            return res.status(400).json({email: 'Email already exists.'})
        }else{ // create record if email does not yet exist
            //assign the avatar
            const avatar = gravatar.url(req.body.email, {
                s: '200', // size
                r: 'pg', // rating
                d: 'mm', // default
            });

            //create new user
            //assign User attributes from form in body
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                avatar
            });

            //hash the password
            bcrypt.genSalt(10, function(err, salt){
                bcrypt.hash(newUser.password, salt, function(err, hash){
                    if(err) {throw err};
                    newUser.password = hash; // assign hashed passwords
                    newUser.save()
                        .then(user => res.json(user)) // display user as json file (user var is returned and displayed)
                        .catch(err => console.log(err)); // log error if any
                })
            });
        }
    });
})




module.exports = router;