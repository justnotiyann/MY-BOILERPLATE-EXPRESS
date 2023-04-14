const Users = require("../../models/Users.model");

exports.getAllUsers = async () => {
  const result = await Users.find();
  return result;
};
