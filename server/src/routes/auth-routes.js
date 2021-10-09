const express = require("express");
const AuthController = require("../controllers/auth-controller");
const router = express.Router();
const authController = new AuthController();

router.get("/login", authController.login);
router.get("/roles", authController.getRoles);

module.exports = router;
