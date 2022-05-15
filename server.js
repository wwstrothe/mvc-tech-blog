const path = require("path");
require("dotenv").config();
const express = require("express");
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({})

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "public")));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./controllers/"));

// force: true to reset the database and clear all values, updating any new relationships
// force: false to maintain data
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
