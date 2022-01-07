const express = require("express");
const app = express();
const PORT = 8080; // default port 8080

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));


const flyDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};
const branchDatabase = {
  1: {id: 1, latitude: 3, longitude: 5},
  2: {id: 2, latitude: 8, longitude: 2}
};

const promotionDatabase = {
  1: {id: 1, 
      branchId: 2, 
      imageUrl: "/images/promotion_image.webp",
      caption: "Great Opportunity"},
  2:  {id: 1, 
       branchId: 2, 
       imageUrl: "/images/promotion_image.webp",
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
  const templateVars = {branchDatabase, promotionDatabase};
  res.render("marketerPage", templateVars);
});

app.post("/addBranch", (req, res) => {
  console.log("%%%", req.body)
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;
  const id = Object.keys(branchDatabase).length + 1;
  branchDatabase[id] = {id, latitude, longitude};
  console.log(branchDatabase);
  // const templateVars = {branchDatabase: branchDatabase}
  // res.render("marketerPage", templateVars);
  res.redirect("/marketer");
})

app.post("/addPromotion", (req, res) => {
  console.log("%%%", req.body)
  const branchId = req.body.branchId;
  const imageUrl = req.body.imageUrl;
  const caption = req.body.caption;
  const id = Object.keys(promotionDatabase).length + 1;
  promotionDatabase[id] = {branchId, imageUrl, caption};
  console.log(promotionDatabase);
  // const templateVars = {branchDatabase: branchDatabase}
  // res.render("marketerPage", templateVars);
  res.redirect("/marketer");
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});