const router = require("express").Router();
const { getAllUsers } = require("./users.controller");

router.get("/", getAllUsers);

module.exports = router;
