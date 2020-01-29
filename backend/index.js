const express = require("express");
const cors = require("cors");
const app = express();
//const passport = require("passport");
const { backendPort, db } = require("./conf");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());
// app.use(passport.initialize());

app.get("/packages", (req, res) => {
  db.query(
    "SELECT * FROM package",
    (err, results) => {
      if (err) {
        console.log(err)
        return res.status(500).send("Sorry, we encountered an internal error.");
      } else {
        return res.status(200).json(results);
      }
    }
  );
});


app.listen(backendPort, (err) => {
  if (err) {
    console.log("Something bad happened...");
  }
});
