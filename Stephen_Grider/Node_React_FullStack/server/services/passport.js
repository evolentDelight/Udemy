const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys.js");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id); //user.id != profile.id; user.id === mongo-unique.id
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback", //"/auth/google/callback drops secure in http(s) -> Full URI is one option"
      proxy: true, //Other method to obtain https - "Trust the proxy" - this is due to heroku being a proxy
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleID: profile.id }); //Query returns Promise

      if (existingUser) {
        //we already have a record with the given Profile ID
        return done(null, existingUser);//By returning, the else statement after can be ignored
      }
      //we do not have a record with the given ID, make a new record
      const user = await new User({ googleID: profile.id }).save();
      done(null, user);
    }
  )
);
/*
Passes to Passport authentication process
done(error, UserRecord)
*/
