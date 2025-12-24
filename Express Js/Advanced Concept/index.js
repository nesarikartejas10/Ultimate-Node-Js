// Different Settings for Each ENV
const envFilePath =
  process.env.NODE_ENV === "production"
    ? ".env.production"
    : ".env.development";

import dotenv from "dotenv";
dotenv.config({
  path: envFilePath,
});
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import todoRouter from "./routes/todos.route.js";

const app = express();

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

app.use(todoRouter);

app.listen(process.env.PORT, () => {
  console.log("server is listening on http://localhost:3000");
});
