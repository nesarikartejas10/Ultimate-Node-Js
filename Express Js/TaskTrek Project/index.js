import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const todos = [
  {
    id: 1,
    task: "Create all APIs for Project 01",
    tags: ["NodeJS", "JavaScript"],
    status: "todo",
  },
  {
    id: 2,
    task: "Create API for list of all Todos",
    tags: ["NodeJS"],
    status: "doing",
  },
  {
    id: 3,
    task: "Plan Project 01",
    tags: ["JavaScript"],
    status: "done",
  },
];

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to TaskTrek Project!..");
});

//fetch all todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

//get single todo
app.get("/todos/:id", (req, res) => {
  const todoId = parseInt(req.params.id);

  const todo = todos.find((todo) => todo.id === todoId);
  res.json(todo);
});

//Create a new todo
app.post("/todos", (req, res) => {
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
app.put("/todos/:id", (req, res) => {
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
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on: http://localhost:${PORT}`);
});
