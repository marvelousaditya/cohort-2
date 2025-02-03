import { NextFunction, Request, Response } from "express";
import { JWT_Pass, ResponseEnum } from "./config";
import jwt from "jsonwebtoken";
export const userMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers["authorization"];
  const decoded = jwt.verify(token as string, JWT_Pass);
  if (decoded) {
    //@ts-ignore
    req.userId = decoded.id;
    next();
  } else {
    res
      .status(ResponseEnum.Unauthorized)
      .json({ msg: "You are not logged in" });
  }
};
