import express from "express";
import session from "express-session";
import Mongostore from "connect-mongo";

const app = express();

app.use(
  session({
    secret: "mysecretKey",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },

    //store session in mongodb instead of ram
    store: Mongostore.create({
      mongoUrl: "mongodb://127.0.0.1:27017/sessionDb",
      collectionName: "mySessions",
    }),
  })
);

//Home route
app.get("/", (req, res) => {
  if (!req.session.username) {
    return res.send("Username is not found in session!!");
  }
  res.send(`Username from session is: ${req.session.username}`);
});

//create session(here session is stored in ram)
app.get("/set-username", (req, res) => {
  req.session.username = "tejas_session_123";
  res.send("Session is created successfully");
});

//read session
app.get("/get-username", (req, res) => {
  if (!req.session.username) {
    return res.send("Username is not found in session!!");
  }
  res.send(`Username from session is: ${req.session.username}`);
});

//destroy session
app.get("/destroy", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send("Failed to destroy session");
    }

    res.clearCookie("connect.sid");
    res.send("Session destroy successfuly");
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is running on: http://localhost:${PORT}`);
});
