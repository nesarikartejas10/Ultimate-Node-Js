import cookieParser from "cookie-parser";
import express from "express";

const app = express();
app.use(cookieParser("mySecretKey123"));

//Home Route
app.get("/", (req, res) => {
  const username = req.cookies.username;
  if (!username) {
    return res.send("Cookie not found!!");
  }
  res.send(`Cookie found: ${username}`);
});

//store cookie
app.get("/set-cookie", (req, res) => {
  res.cookie("username", "tejas_cookie_123", {
    maxAge: 1000 * 60 * 15,
    httpOnly: true,
  });
  res.send("Cookie has been set..");
});

//store signed cookie
app.get("/set-signed-cookie", (req, res) => {
  res.cookie("username", "tejas_signedCookie_123", {
    maxAge: 1000 * 60 * 15,
    httpOnly: true,
    signed: true,
  });
  res.send("Cookie has been set..");
});

//read cookie
app.get("/read-cookie", (req, res) => {
  const username = req.cookies.username;
  if (!username) {
    return res.send("Cookie not found!!");
  }
  res.send(`Cookie found: ${username}`);
});

//read signed signed cookie
app.get("/read-signed-cookie", (req, res) => {
  const username = req.signedCookies.username;
  if (!username) {
    return res.send("Cookie not found!!");
  }
  res.send(`Cookie found: ${username}`);
});

//delete cookie
app.get("/delete-cookie", (req, res) => {
  res.clearCookie("username");
  res.send("Cookie deleted successfully...");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is listening on: http://localhost:${PORT}`);
});
