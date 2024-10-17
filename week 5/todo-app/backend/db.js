const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://aduthekaddu:tripleThr3at@learning.pbemi.mongodb.net/todos"
);

/**
 *  Todo {
 *    title: string,
 *    description: string,
 *    completed: boolean
 *   }
 * */

// const todoSchema = mongoose.model("todos", {
//   title: String,
//   description: String,
//   completed: Boolean,
// });

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports =   { todo };
