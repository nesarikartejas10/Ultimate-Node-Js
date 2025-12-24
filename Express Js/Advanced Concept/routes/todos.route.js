import express from "express";
import { todos } from "../data/todos.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to TaskTrek Project!..");
});

//fetch all todos
router.get("/todos", (req, res) => {
  console.log(res.getHeaders());
  res.json(todos);
});

//Create a new todo
router.post("/todos", (req, res) => {
  const { task, tags, status } = req.body;

  if (!task) {
    return res.status(400).json({ message: "Task field is required." });
  }

  if (!tags) {
    return res.status(400).json({ message: "tags field is required." });
  }

  if (!status) {
    return res.status(400).json({ message: "status field is required." });
  }

  const newTodo = {
    id: todos[todos.length - 1].id + 1,
    task,
    tags,
    status,
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

//update todo
router.put("/todos/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  const { task, tags, status } = req.body;

  const todoIndex = todos.findIndex((todo) => todo.id === todoId);

  if (todoIndex === -1) {
    return res.status(404).json({ message: "todo not found." });
  }

  if (task) {
    todos[todoIndex].task = task;
  }

  if (tags) {
    todos[todoIndex].tags = tags;
  }

  if (status) {
    todos[todoIndex].status = status;
  }

  res.status(200).json(todos[todoIndex]);
});

//delete todo
router.delete("/todos/:id", (req, res) => {
  const todoId = parseInt(req.params.id);

  const todoIndex = todos.findIndex((todo) => todo.id === todoId);
  if (todoIndex === -1) {
    return res.status(404).json({ message: "todo not found." });
  }

  todos.splice(todoIndex, 1);

  res.status(200).json({
    message: `todo deleted successfully.`,
  });
});

export default router;
