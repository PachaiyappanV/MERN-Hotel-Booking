import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { CustomAPIError } from "../error";
import { Error as MongooseError } from "mongoose";

const errorHandlerMiddleWare = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let customError = {
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    msg: "Somthing went wrong please try again later",
  };
  if (err instanceof CustomAPIError) {
    customError.statusCode = err.statusCode;
    customError.msg = err.message;
  }
  if (err instanceof MongooseError.ValidationError) {
    customError.statusCode = StatusCodes.BAD_REQUEST;
    customError.msg = Object.values(err.errors)
      .map((item) => (item as MongooseError.ValidatorError).message)
      .join(",");
  }
  if ("code" in err && err.code === 11000) {
    customError.statusCode = StatusCodes.BAD_REQUEST;
    customError.msg = "User already exist ";
  }
  if (err instanceof MongooseError.CastError) {
    customError.statusCode = StatusCodes.NOT_FOUND;
    customError.msg = `No item found with id:${err.value}`;
  }

  res.status(customError.statusCode).json({
    status:
      customError.statusCode === StatusCodes.INTERNAL_SERVER_ERROR
        ? "error"
        : "fail",
    message: customError.msg,
  });
};

export default errorHandlerMiddleWare;
