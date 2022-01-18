const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const commentSchema = new mongoose.Schema(
  {
    description: {
      type: String,
    },
    title: {
      type: Schema.Types.ObjectId,
      ref: "articles",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("comments", commentSchema);
