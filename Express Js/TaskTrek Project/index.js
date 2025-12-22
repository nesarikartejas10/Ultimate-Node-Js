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
  res.send(todos);
});

//get single todo
app.get("/todos/:id", (req, res) => {
  const todoId = parseInt(req.params.id);

  const todo = todos.find((todo) => todo.id === todoId);
  res.send(todo);
});

//Create a new todo
app.post("/todos", (req, res) => {
  const { task, tags, status } = req.body;

  const newTodo = {
    id: todos[todos.length - 1].id + 1,
    task,
    tags,
    status,
  };

  todos.push(newTodo);
  res.send(newTodo);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on: http://localhost:${PORT}`);
});
