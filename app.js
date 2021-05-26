const express = require("express");
const app = express();
const port = 3006;

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

app.listen(port, () => {
  console.log("project started");
});
