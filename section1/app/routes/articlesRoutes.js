const route = require("express").Router();
const {
  create,
  getOne,
  update,
  deleteData,
  getAll,
} = require("../controllers/articlesController");
route.post("/articles", create);
route.get("/articles/:id", getOne);
route.get("/articles", getAll);
route.put("/articles/:id", update);
route.delete("/articles/:id", deleteData);

module.exports = route;
