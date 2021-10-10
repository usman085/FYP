const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    role_id: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
    department_id: { type: mongoose.Schema.Types.ObjectId, ref: "Department" },
  },
  { timestamps: true }
);

const user = mongoose.model("User", UserSchema);

module.exports = user;
