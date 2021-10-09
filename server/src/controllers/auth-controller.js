const Role = require("../models/Role");

class AuthController {
  constructor() {}

  login(req, res) {
    res.status(200).json({ message: "Login" });
  }

  seedRole = () => {
    let role = new Role({
      name: "Doctor",
    });
    role.save();
    res.status(200).json({ message: "Get Roles" });
  };

  getRoles(req, res) {
    let role = new Role({
      name: "Doctor",
    });
    role.save();
    res.status(200).json({ message: "Get Roles" });
  }
}

module.exports = AuthController;
