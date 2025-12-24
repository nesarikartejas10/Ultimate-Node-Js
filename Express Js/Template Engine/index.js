import express from "express";

const app = express();

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("template", {
    title: "Template Engine",
    heading: "Template Engine with pug",
    content: "is this pug really good?",
  });
});

app.listen(3000, () => {
  console.log("Server is listening http://localhost:3000");
});
