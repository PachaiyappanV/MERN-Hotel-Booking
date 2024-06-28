import { IUser } from "../models/User";
const createTokenUser = (user: IUser) => {
  return { name: user.firstName, userId: user._id };
};

export default createTokenUser;
