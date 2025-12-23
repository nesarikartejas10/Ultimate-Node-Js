import express, { urlencoded } from "express";

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

//Built-in middleware
app.use(express.json());
app.use(urlencoded({ extended: true }));

//custom middleware
app.use((req, res, next) => {
  console.log(`${req.method} | ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to TaskTrek Project!..");
});

//fetch all todos
app.get("/todos", (req, res) => {
  res.json(todos);
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

app.listen(3000, () => {
  console.log("server is listening on http://localhost:3000");
});
