const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const TodoModel = require("./model/todo.models");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/todolist");

// Create
app.post("/add", (req, res) => {
  const todo = req.body.todo;
  TodoModel.create({
    todo: todo,
  })
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
});

// Read
app.get("/get", (req, res) => {
  TodoModel.find()
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
});

// Update
app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  TodoModel.findByIdAndUpdate({ _id: id }, { done: true })
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
});

// Delete
app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  TodoModel.findByIdAndDelete({ _id: id })
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
