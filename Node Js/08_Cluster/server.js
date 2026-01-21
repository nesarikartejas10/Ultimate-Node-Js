import express from "express";
import cluster from "node:cluster";
import os from "node:os";

const app = express();
const totalCPUs = os.cpus().length;

app.get("/", (req, res) => {
  res.send("Welcome to express server");
});

if (cluster.isPrimary) {
  console.log(`Master process ${process.pid} is running `);

  //create worker process
  for (let i = 0; i < totalCPUs; i++) {
    cluster.fork();
  }

  //in case worker die, create new one
  cluster.on("exit", (worker) => {
    console.log(`Worker ${process.pid} is died`);
    cluster.fork();
  });
} else {
  app.listen(3000, () => {
    console.log(`Worker ${process.pid} started on port 3000`);
  });
}
