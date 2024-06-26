import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./custom-api-error";

class NotFoundError extends CustomAPIError {
  constructor(message) {
    super(message, StatusCodes.NOT_FOUND);
  }
}

export default NotFoundError;
