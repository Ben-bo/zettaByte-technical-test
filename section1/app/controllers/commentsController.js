const { articlesModel, commentModel } = require("../models");

const articlesController = {
  getAll: async (req, res) => {
    try {
      const dataComment = await commentModel.find().populate("title");
      res.send({ dataComment });
    } catch (error) {
      console.log(error);
      res.send({ error });
    }
  },
  create: async (req, res) => {
    try {
      const idTitle = req.params.id;
      let dataArticles = await articlesModel.findById(idTitle).exec();
      const data = {
        description: req.body.description,
        title: idTitle,
      };
      const comment = new commentModel(data);
      const saved = await comment.save();
      if (saved) {
        dataArticles.comment.push(saved._id);
        await articlesModel.findByIdAndUpdate(idTitle, dataArticles);
      }
      res.send({ saved });
    } catch (error) {
      console.log(error);
      res.send({ error });
    }
  },
  updateData: async (req, res) => {
    try {
      idComment = req.params.id;
      const updt = await commentModel.findByIdAndUpdate(idComment, req.body);
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
      const dlt = await commentModel.findByIdAndDelete(idTitle);
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
