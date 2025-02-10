import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_PASS } from "./config";
export const userMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers["auth"];
  const decoded = jwt.verify(token as unknown as string, JWT_PASS);
  if (decoded) {
    //@ts-ignore
    req.userId = decoded.id;
    next();
  } else {
    res.status(400).json({ msg: "validation failed" });
  }
};
