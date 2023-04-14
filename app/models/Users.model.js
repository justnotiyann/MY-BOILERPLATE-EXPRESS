const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: String,
  password: String,
});

const Users = mongoose.model("user", UserSchema);
module.exports = Users;
