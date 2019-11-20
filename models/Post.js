const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    body: String,
    author: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Post", postSchema);
