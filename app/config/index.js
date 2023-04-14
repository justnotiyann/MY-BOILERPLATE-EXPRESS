require("dotenv").config();
const { SERVER_PORT, JWT_SECRET, JWT_EXPIRATION, MONGODB_URL } = process.env;

module.exports = {
  SERVER_PORT,
  JWT_SECRET,
  JWT_EXPIRATION,
  MONGODB_URL,
};
