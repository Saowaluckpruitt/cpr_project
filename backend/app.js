require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { sequelize } = require("./models/index");
sequelize.sync({ force: true });

const app = express();
app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server` + port));
