const express = require("express");
const cors = require("cors");
const app = express();
const passport = require("passport");
const { backendPort, db } = require("./conf");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());
app.use(passport.initialize());
app.use("/auth", require("./auth"));

app.get("/packages", (req, res) => {
  db.query(
    "SELECT * FROM package",
    (err, results) => {
      if (err) {
        return res.status(500).send("Sorry, we encountered an internal error.");
      } else {
        return res.status(200).json(results);
      }
    }
  );
});

app.put("/package/:id/vote", (req, res) => {
  const packageId = parseInt(req.params.id);
  const formData = req.body;
  const userId = formData.userId;
  const userVote = formData.userVote;
  db.query(
    "SELECT id FROM vote where user_id = ? and package_id = ?", [userId, packageId],
    (err, results) => {
      if (err) {
        return res.status(500).send("Sorry, we encountered an internal error.");
      } else if (results.length === 1) {
        db.query(
          "UPDATE vote SET globale = ? where id = ?",
          [userVote, parseInt(results[0].id)],
          (err, results) => {
            if (err) {
              // res.status(500).send("Erreur lors de la sauvegarde du vote" + err);
              res.status(500).send(console.log(err))
            } else {
              res.sendStatus(201);
            }
          })
      }
      else if (results.length === 0) {
        db.query(
          "INSERT INTO vote (user_id, package_id, globale) VALUES (?,?,?)",
          [userId, packageId, userVote],
          (err, results) => {
            if (err) {
              // res.status(500).send("Erreur lors de la sauvegarde du vote" + err);
              res.status(500).send(console.log(err))
            } else {
              res.sendStatus(201);
            }
          }
        )
      }
    })
})


app.listen(backendPort, (err) => {
  if (err) {
    console.log("Something bad happened...");
  }
});
