const express = require("express");
const app = express();
const port = 3006;
const homeController = require("./controllers/homeController");

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/", (req, res) => {
  res.send("Got a post request");
});

app.put("/", (req, res) => {
  res.send("Got a put request");
});

app.delete("/", (req, res) => {
  res.send("Got a delete request");
});

app.get("/home", homeController.index);

app.listen(port, () => {
  console.log("project started on port 3006");
});
