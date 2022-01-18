const express = require("express");

const app = express();
require("dotenv").config();
require("./config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { articlesRoute, commentRoute } = require("./app/routes");
app.use("/api", articlesRoute, commentRoute);

app.listen(5000, () => {
  console.log(`server is running`);
});
