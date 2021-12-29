const express = require("express");
const app = express();
const PORT = 8080; // default port 8080

app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));

const flyDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};
const branchDatabase = {
  1: {id: 1, Latitude: 3, Longitude: 5},
  2: {id: 2, Latitude: 8, Longitude: 2}
};

const promotionDatabase = {
  1: {id: 1, 
      branchId: 2, 
      image: "https://www.shutterstock.com/image-illustration/3d-illustration-cartoon-characters-businessmen-hands-2022445304",
      caption: "Great Opportunity"},
  2:  {id: 1, 
       branchId: 2, 
       image: "https://www.shutterstock.com/image-vector/central-bank-money-policy-inflation-interest-1996866989",
       caption: "Fantastic Opportunity"}
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