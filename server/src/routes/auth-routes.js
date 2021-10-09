const express = require("express");
const AuthController = require("../controllers/auth-controller");
const router = express.Router();
const authController = new AuthController();

router.post("/login", authController.login.bind(authController));
router.get("/roles", authController.getRoles.bind(authController));
router.post("/register", authController.register.bind(authController));

module.exports = router;
