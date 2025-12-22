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

app.get("/", (req, res) => {
  res.send("Welcome to TaskTrek Project!..");
});

//fetch all todos
app.get("/todos", (req, res) => {
  res.send(todos);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on: http://localhost:${PORT}`);
});
