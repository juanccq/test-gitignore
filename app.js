const express = require("express");
const app = express();
const port = 3006;
const homeController = require("./controllers/homeController");
const inventoryController = require("./controllers/inventoryController");
const itemController = require("./controllers/itemController");

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
app.get("/inventory", inventoryController.index);
app.get("/item", itemController.index);

app.listen(port, () => {
  console.log("project started on port 3006");
});
