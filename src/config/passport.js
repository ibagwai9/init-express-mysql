const { Strategy, ExtractJwt }  = require ("passport-jwt")
// import { placeholder } from "sequelize/types/lib/operators";
const models =  require("../models");

const Users = models.User;

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "secret";
// opts.issuer = 'accounts.examplesoft.com';
// opts.audience = 'yoursite.net';

// create jwt strategy
module.exports = (passport) => {
  passport.use(
    new Strategy(opts, (jwt_payload, done) => {
      Users.findOne({ where: { id: jwt_payload.id } }).then((user) => {
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      });
      //   .catch(err => console.log(err));
      // db.sequelize
      //   .query(`SELECT * FROM Users WHERE id='${jwt_payload.id}'`)
      //   .then((found) => {
      //     let user = found[0];
      //     console.log(user);
      //     //check for user
      //     if (user.length) {
      //       return done(null, user[0]);
      //     }
      //     return done(null, false);
      //   })
      //   .catch((err) => console.log(err));
    })
  );
};
