const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//Load User Model
const User = require('../models/User');

module.exports = function(passport) {
    passport.use(
        new LocalStrategy({usernameField: 'email'}, (email, password, done) => {
            //Match User
            User.findOne({email: email})
                .then(user => {
                    if (!user) {
                        return done(null, false, {message: 'That email is not registered'});
                    }

                    //Match password
                    bcrypt.compare();
                })
                .catch(err => console.log(err));
        })
    );
}