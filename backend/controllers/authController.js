import { StatusCodes } from "http-status-codes";
import { UnauthenticatedError } from "../errors/customError.js";
import User from "../models/UserModel.js";
import { comparePassword, hashPassword } from "../utils/passwordHash.js";
import { createJWT } from "../utils/tokenUtils.js";

export const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isFirstAccount ? "admin" : "user";
  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;

  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: "registered success fully!" });
};



export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new UnauthenticatedError("Invalid credentials");

    const isPasswordCorrect = await comparePassword(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) throw new UnauthenticatedError("Invalid credentials");

    const token = createJWT({ userId: user._id, role: user.role });

    const oneDay = 1000 * 60 * 60 * 24;
    res.cookie("token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + oneDay),
      secure: process.env.NODE_ENV === "production",
    });
    
    res.status(StatusCodes.OK).json({
      msg: "User logged in",
      jwt:token,
      user: user
    });
  } catch (error) {
    res.status(StatusCodes.UNAUTHORIZED).json({ msg: error.message });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: "user logged out!" });
};

