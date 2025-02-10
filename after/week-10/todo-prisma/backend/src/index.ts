import express, { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { user } from "./types";
import jwt from "jsonwebtoken";
import { userMiddleware } from "./middleware";
import { number } from "zod";
import { JWT_PASS } from "./config";
import cors from "cors";

const prisma = new PrismaClient();
const app = express();
app.use(cors());
app.use(express.json());
//@ts-ignore
app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const parsedData = user.safeParse({ username, password });
  if (parsedData.success) {
    try {
      const userExists = await prisma.user.findFirst({
        where: { username },
      });
      if (userExists) {
        return res.status(403).json({ msg: "user already exists" });
      }
      const result = await prisma.user.create({ data: { username, password } });
      res.status(200).json({ msg: "user signed up" });
    } catch (err) {
      //@ts-ignore
      console.log("error occured while creating user, ", err.message);
      res.status(500).json({ msg: "error occured" });
    }
  } else {
    res
      .status(400)
      .json({ msg: "you sent wrong inputs", errors: parsedData.error });
  }
});

//@ts-ignore

app.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userExists = await prisma.user.findFirst({
      where: { username, password },
    });
    if (!userExists) {
      return res.status(403).json({ msg: "user doesn't exist,please login" });
    }
    const token = jwt.sign({ id: userExists.id }, JWT_PASS);
    res.status(200).json({ token, msg: "logged in" });
  } catch (err) {
    //@ts-ignore
    console.log("error occured while logging user, ", err.message);
    res.status(500).json({ msg: "error occured" });
  }
});

app.post("/todo", userMiddleware, async (req, res) => {
  const { title, description } = req.body;
  try {
    const result = await prisma.todo.create({
      data: {
        //@ts-ignore
        userId: req.userId,
        title,
        description,
      },
    });
    res.status(200).json({ msg: "todo added" });
  } catch (err) {
    //@ts-ignore
    console.log("an error occured ", err.message);
    res.status(500).json({ msg: "error occured" });
  }
});

app.get("/todo", userMiddleware, async (req, res) => {
  try {
    const result = await prisma.todo.findMany({
      //@ts-ignore
      where: { userId: req.userId },
    });
    if (result.length > 0) {
      res.status(200).json({ result });
    } else {
      res.status(200).json({ msg: "no todos" });
    }
  } catch (err) {
    //@ts-ignore
    console.log("an error occured, ", err.message);
    res.status(500).json({ msg: "an error occured" });
  }
});
//@ts-ignore
app.put("/todo", userMiddleware, async (req, res) => {
  try {
    const { id } = req.body;
    if (!id || isNaN(id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }
    const result = await prisma.todo.update({
      //@ts-ignore
      where: { id: Number(id), userId: req.userId },
      data: { done: true },
    });
    res.status(200).json({ msg: "todo marked as done" });
  } catch (err) {
    //@ts-ignore
    console.log("an error occured, ", err.message);
    res.status(500).json({ msg: "an error occured" });
  }
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
