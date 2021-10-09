const express = require("express");
const authRoute = require("./auth-routes");
const router = express.Router();
const { jsonResponseFormat } = require("../middlewares/ResponseFormatter");

router.use(jsonResponseFormat);
router.use("/auth", authRoute);

module.exports = router;
