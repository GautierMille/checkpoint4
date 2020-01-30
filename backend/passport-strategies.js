const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { Strategy: JWTStrategy, ExtractJwt } = require("passport-jwt");
const bcrypt = require("bcrypt");
const {
  jwtSecret,
  db
} = require("./conf");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    (formEmail, formPassword, done) => {
      db.query(
        "SELECT email, password, id, pseudo FROM user WHERE email=?",
        [formEmail],
        (err, results) => {
          if (err) {
            return done(err);
          }
          let user;
          if (results && results[0])
            user = JSON.parse(JSON.stringify(results[0]));
          if (!user || !user.email)
            return done(null, false, { message: "User not found!" });
          bcrypt.compare(formPassword, user.password, (errBcrypt, result) => {
            if (errBcrypt) return done(errBcrypt);
            if (!result)
              return done(null, false, {
                message: "Incorrect password!"
              });
            return done(null, user);
          });
        }
      );
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtSecret
    },
    (jwtPayload, done) => {
      const user = jwtPayload;
      // find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
      return done(null, user);
    }
  )
);
