const { articlesModel } = require("../models");

const articlesController = {
  getOne: async (req, res) => {
    try {
      const idTitle = req.params.id;
      const data = await articlesModel.findById(idTitle).populate("comment");
      res.send({ data });
    } catch (error) {
      console.log(error);
      res.send({ error });
    }
  },
  getAll: async (req, res) => {
    try {
      const data = await articlesModel.find().populate("comment");
      res.send({ data });
    } catch (error) {
      console.log(error);
      res.send({ error });
    }
  },
  create: async (req, res) => {
    try {
      const articles = new articlesModel(req.body);
      const saved = await articles.save();
      res.send({ saved });
    } catch (error) {
      console.log(error);
      res.send({ error });
    }
  },
  update: async (req, res) => {
    try {
      idTitle = req.params.id;
      const updt = await articlesModel.findByIdAndUpdate(idTitle, req.body);
      if (updt) {
        res.send({ message: "success" });
      }
    } catch (error) {
      console.log(error);
      res.send({ error });
    }
  },
  deleteData: async (req, res) => {
    try {
      const idTitle = req.params.id;
      const dlt = await articlesModel.findByIdAndDelete(idTitle);
      if (dlt) {
        res.send({ message: "success" });
      }
    } catch (error) {
      console.log(error);
      res.send({ error });
    }
  },
};
module.exports = articlesController;
