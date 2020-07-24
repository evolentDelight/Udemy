const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys.js");

const User = mongoose.model("users");

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleID: profile.id })//Query returns Promise
        .then((existingUser) => {
          if (existingUser) {
            //we already have a record with the given Profile ID
            done(null, existingUser);
          } else {
            //we do not have a record with the given ID, make a new record
            new User({ googleID: profile.id })
              .save()
              .then(user => done(null, user));
          }
        }
      );
    }
  )
);
