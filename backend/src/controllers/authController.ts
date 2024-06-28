import { Request, Response } from "express";
import User from "../models/User";
import { attachCookiesToResponse, createTokenUser } from "../utils";
import { StatusCodes } from "http-status-codes";

const register = async (req: Request, res: Response) => {
  const user = await User.create(req.body);
  const tokenUser = createTokenUser(user);

  attachCookiesToResponse(res, tokenUser);
  res.status(StatusCodes.CREATED).json({
    status: "success",
    data: {
      message: "user registered successfully",
      user: {
        name: user.firstName + " " + user.lastName,
        email: user.email,
        id: user._id,
      },
    },
  });
};

const login = async (req: Request, res: Response) => {
  res.send("login route");
};

const logout = async (req: Request, res: Response) => {
  res.send("logout route");
};

export { register, login, logout };
