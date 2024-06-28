import { Request, Response } from "express";
import User from "../models/User";

const register = async (req: Request, res: Response) => {
  res.send("register route");
};

const login = async (req: Request, res: Response) => {
  res.send("login route");
};

const logout = async (req: Request, res: Response) => {
  res.send("logout route");
};

export { register, login, logout };
