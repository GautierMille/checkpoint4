const express = require("express");
const cors = require("cors");
// const app = express();
const passport = require("passport");
// const config = require("./conf");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());
app.use(passport.initialize());


app.listen(backendPort, (err) => {
  if (err) {
    throw new Error("Something bad happened...");
  }
});
