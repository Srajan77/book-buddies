const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  savedBook: [{ type: mongoose.Schema.Types.ObjectId, ref: "books" }],
});

const User = mongoose.model("users", UserSchema);

module.exports = User;
