const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("./main-custom-error");

class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnauthenticatedError;
