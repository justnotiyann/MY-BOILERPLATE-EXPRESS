const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("./main-custom-error");

class NotFound extends CustomAPIError {
  constructor(message) {
    super(message);
    // memberikan statusCode not found
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}
module.exports = NotFound;
