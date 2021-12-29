const express = require("express");
const app = express();
const PORT = 8080; // default port 8080

app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));

const flyDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};

app.get("/fly.json", (req, res) => {
  res.json(flyDatabase);
});


app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get("/user", (req, res) => {
  res.render("userPage");
});

app.get("/marketer", (req, res) => {
  res.render("marketerPage");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});