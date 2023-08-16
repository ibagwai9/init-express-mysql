const passport  = require("passport");
const config  = require("../config/config");

const user = require("../controllers/user");
module.exports = (app) => {
  // create a new user
  app.post(
    `/users/create`,
    user.create
  );

  // user login
  app.post(`/users/login`, user.login);
  // user login
  app.get(`/users/get-token`, user.getToken);

  app.get(
    `/user/verify`,
    passport.authenticate("jwt", { session: false }),
    user.verifyUserToken
  );

  //retrieve all users
  app.get(
    `/users`,
    passport.authenticate("jwt", {
      session: false,
    }),
    user.findAllUsers
  );

  // retrieve user by id
  app.get(
    `/users/:userId`,
    passport.authenticate("jwt", {
      session: false,
    }),user.findById
  );

  // update a user with id
  app.post(`/users/update`, user.update);
  // delete a user
  app.delete(
    `/users/:userId`,
    passport.authenticate("jwt", {
      session: false,
    }),
    // allowOnly(config.accessLevels.admin,)
    user.deleteUser
  );

  app.get(
    `/user/get-postion`,
    passport.authenticate("jwt", {
      session: false,
    }),
    user.getRole
  );

  app.post(`/create/user`, user.createUser);

  app.get("*", function (req, res) {
    res.status(404).json("<h1>404</h1><p>Page not found!</p>");
  });
};
