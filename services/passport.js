const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose')
const keys = require('../config/keys');

const User = require('../models/User')

passport.serializeUser((user, done)=>{
  done(null, user.id)
})

passport.deserializeUser((id, done)=>{
  User.findById(id, (err, user)=> {
    done(null, user)
  })
})

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },

      (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id }, (err, existingUser)=>{
          if (err) return console.log(err)
          if (existingUser){
             return done(err, existingUser)
          } 
          User.create({googleId: profile.id}, (err, user) => {
            done(err, user)
          })
        })
      }
  )
);

