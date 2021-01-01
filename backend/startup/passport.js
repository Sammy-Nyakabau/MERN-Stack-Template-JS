const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
require("dotenv").config();
const logger = require("../config/logger");
const session = require("express-session");
const authDebugger = require("debug")("app:auth");
const LocalStrategy = require("passport-local");
const bcrypt = require("bcrypt");
const { User } = require("../models/usersModel");
const ObjectID = require("mongodb").ObjectID;

module.exports = function (app) {
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: true,
      saveUninitialized: true,
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({
        _id: new ObjectID(id),
      });
      done(null, user);
    } catch (error) {
      done(error);
    }
  });

  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: "http://localhost:5000/api/users/auth/facebook/callback",
        profileFields: ['id', 'displayName', 'photos', 'email']
      },
      async (_accessToken, _refreshToken, profile, done) => {
        const currentUser = await User.findOne({ facebookId: profile.id });

        if (currentUser) {
          //if we already have a record with the given profile ID
          done(null, currentUser);
        } else {
          //if not, create a new user
          const newUser = await new User({
            facebookId: profile.id,
            username: profile.displayName,
            email: profile.emails[0].value,
          }).save();
          done(null, newUser);
        }
      }
    )
  );

  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/api/users/auth/google/redirect",
      },
      async (_accessToken, _refreshToken, profile, done) => {
        // passport callback function
        //check if user already exists in our db with the given profile ID
        const currentUser = await User.findOne({ googleId: profile.id });

        if (currentUser) {
          //if we already have a record with the given profile ID
          done(null, currentUser);
        } else {
          //if not, create a new user
          const newUser = await new User({
            googleId: profile.id,
            username: profile.displayName,
            email: profile.emails[0].value,
          }).save();
          done(null, newUser);
        }
      }
    )
  );

  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const user = await User.findOne({
          username,
        });
        authDebugger(`User ${username} attempted to log in.`);
        logger.info(`User ${username} attempted to log in.`);
        if (!user) {
          return done(null, false);
        }
        if (!bcrypt.compareSync(password, user.password)) {
          return done(null, false);
        }
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    })
  );
};
