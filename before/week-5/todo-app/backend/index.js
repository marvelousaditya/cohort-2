const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const PORT = 3000;
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    return res.status(411).json({
      msg: "you sent the wrong inputs",
    });
  }

  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: "todo created",
  });
});

app.get("/todos", async (req, res) => {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    return res.status(411).json({
      msg: "you sent the wrong inputs",
    });
  }

  await todo.updateOne({ _id: req.body.id }, { completed: true });

  res.json({
    msg: "Todo marked as completed   ",
  });
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
