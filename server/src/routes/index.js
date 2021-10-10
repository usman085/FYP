const express = require("express");
const authRoute = require("./auth-routes");
const homeRoute = require("./home-routes");

const router = express.Router();
const { jsonResponseFormat } = require("../middlewares/ResponseFormatter");

router.use(jsonResponseFormat);
router.use("/auth", authRoute);
router.use("/", homeRoute);

module.exports = router;
