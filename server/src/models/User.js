const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    role_id: mongoose.SchemaTypes.ObjectId,
  },
  { timestamps: true }
);

const user = mongoose.model("User", UserSchema);

module.exports = user;
