import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const notFoundMiddleware = (req: Request, res: Response) => {
  res.status(StatusCodes.NOT_FOUND).json({
    status: "fail",
    message: "404 Not Found",
  });
};

export default notFoundMiddleware;
