require("dotenv").config();

const mysql = require("mysql");

let backendPort = process.env.BACKEND_PORT || "5050"
const jwtSecret = process.env.JWT_SECRET || "jwt_please_change"
const saltRounds = process.env.SALT_ROUNDS || "10"
const jwtExpiration = process.env.JWT_EXPIRATION || "10000"
const db = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST || "example.org", // adresse du serveur
  user: process.env.DB_USER || "bob", // le nom d'utilisateur
  password: process.env.DB_PASSWORD || "secret", // le mot de passe
  database: process.env.DB_DATABASE || "my_db" // le nom de la base de données
});

module.exports = {
  backendPort,
  db,
  jwtExpiration,
  jwtSecret,
  saltRounds
};
