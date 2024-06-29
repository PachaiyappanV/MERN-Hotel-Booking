import { Request, Response } from "express";
import User from "../models/User";
import { attachCookiesToResponse, createTokenUser } from "../utils";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnauthenticatedError } from "../error";

const register = async (req: Request, res: Response) => {
  const user = await User.create(req.body);
  const tokenUser = createTokenUser(user);

  attachCookiesToResponse(res, tokenUser);
  res.status(StatusCodes.CREATED).json({
    status: "success",
    data: {
      message: "user registered successfully",
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        id: user._id,
      },
    },
  });
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please provide email and password ");
  }

  const user = await User.findOne({ email }).select("-password");

  if (!user) {
    throw new UnauthenticatedError("Invalid credentials");
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid credentials");
  }
  const token = createTokenUser(user);
  attachCookiesToResponse(res, token);
  res.status(StatusCodes.OK).json({
    status: "success",
    data: {
      message: "user logged in",
      user,
    },
  });
};

const logout = async (req: Request, res: Response) => {
  res.send("logout route");
};

export { register, login, logout };
