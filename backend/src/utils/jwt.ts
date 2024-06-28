import jwt from "jsonwebtoken";
import { Response } from "express";
type TPayload = {
  name: string;
  userId: string;
};
const createJWT = (payload: TPayload) => {
  return jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

const attachCookiesToResponse = (res: Response, tokenUser: TPayload) => {
  const token = createJWT(tokenUser);
  const oneDay = 1000 * 60 * 60 * 24;

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
    signed: true,
  });
};

export { attachCookiesToResponse };
