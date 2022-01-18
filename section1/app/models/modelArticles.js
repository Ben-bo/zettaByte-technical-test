const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const articlesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    comment: [
      {
        type: Schema.Types.ObjectId,
        ref: "comments",
      },
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("articles", articlesSchema);
