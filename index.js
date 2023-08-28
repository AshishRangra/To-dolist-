const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();
// app.set("view-engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
let newItems = [];
app.get("/", (req, res) => {

  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let today = new Date();
  let day = today.toLocaleDateString("en-US", options);
  //   res.send(day);
  res.render("list.ejs", { kindofday: day, newListItems: newItems});
});
app.post("/", (req, res) => {
  let newItem = req.body.newItem;
  newItems.push(newItem);
  //   res.send(newItem); it will open on new web page
  res.redirect("/");
});
app.listen(port, () => {
  console.log("server is running ", port);
});
