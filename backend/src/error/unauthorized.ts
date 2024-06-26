import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./custom-api-error";

class UnauthorizedError extends CustomAPIError {
  constructor(message) {
    super(message, StatusCodes.FORBIDDEN);
  }
}

export default UnauthorizedError;
