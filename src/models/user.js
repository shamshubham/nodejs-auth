const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
