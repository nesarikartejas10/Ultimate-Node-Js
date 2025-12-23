import express from "express";
import morgan from "morgan";
import helmet from "helmet";

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

//How to code according to environment
//check node environments
console.log(process.env.NODE_ENV); //undefined
console.log(app.get("env")); //development

//Third-party middleware

if (app.get("env") === "development") {
  app.use(morgan("dev")); // morgon use only in dev
  console.log("morgan added");
}

app.use(helmet());

//Built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); //http://localhost:3000/
app.use("/profile", express.static("assets")); //here we use prefix http://localhost:3000/profile/

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
  console.log(res.getHeaders());
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
