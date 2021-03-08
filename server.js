//Express Server Setup
const express = require("express");
const { request } = require("http");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

//Setup for Static Serving
app.use(express.static("./client/public"));

//Back End Route for Single Restaurant Info
app.get("/apis/:bio", (req, res) => {
  res.sendFile(path.resolve("./api/" + req.params.bio + ".json"));
});

//Back End Route for Restaurant Titles
app.get("/apis", (req, res) => {
  res.sendFile(path.resolve("./api/restaurantID.json"));
});

//Back End Route for 404
app.get("*", (req, res) => {
  res.sendFile(path.resolve("./client/public/index.html"));
});

//Port Listening Confirmation
app.listen(port, () => {
  console.log("listening on port", port);
});
