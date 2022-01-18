const route = require("express").Router();
const {
  create,
  getAll,
  updateData,
  deleteData,
} = require("../controllers/commentsController");
route.post("/comments/:id", create);
route.get("/comments", getAll);
route.put("/comments/:id", updateData);
route.delete("/comments/:id", deleteData);

module.exports = route;
