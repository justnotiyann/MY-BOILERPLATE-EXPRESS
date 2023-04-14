const { getAllUsers } = require("./users.services");

exports.getAllUsers = async (req, res, next) => {
  try {
    const result = await getAllUsers();
    res.status(200).json({ code: 200, data: result });
  } catch (e) {
    next(e);
  }
};
