const BaseController = require("./base-controller");
const bcrypt = require("bcrypt");
const Role = require("../models/Role");
const User = require("../models/User");

const saltRounds = 10;

class AuthController extends BaseController {
  constructor() {
    super();
  }

  async login(req, res) {
    try {
      let { email, password } = req.body;
      let user = (await this.get(User, { email }))[0];
      if (user && bcrypt.compareSync(password, user.password)) {
        let userDetail = await User.findOne({ email }).populate("role_id");
        let data = {
          user: userDetail,
          token: this.generateToken({ _id: user._id, name: user.name }),
        };
        res.successResponse({ data });
      } else {
        res.errorResponse("Invalid User", 409);
      }
    } catch (e) {
      console.log(e);
      res.errorResponse();
    }
  }

  async register(req, res) {
    try {
      let { name, email, password, role_id } = req.body;
      if (!(await this.is_exists(User, { email }))) {
        const salt = bcrypt.genSaltSync(saltRounds);
        let data = {
          name,
          email,
          password: bcrypt.hashSync(password, salt),
          role_id,
        };

        data = await this.create(User, data);
        res.successResponse({ data });
      } else {
        res.errorResponse("Email Already Exists", 409);
      }
    } catch (e) {
      console.log(e);
      res.errorResponse();
    }
  }

  async getRoles(req, res) {
    try {
      let data = await this.get(Role);
      res.successResponse({ data });
    } catch (e) {
      console.log(e);
      res.errorResponse();
    }
  }
}

module.exports = AuthController;
