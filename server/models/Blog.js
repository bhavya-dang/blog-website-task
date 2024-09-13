const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  content: String,
  author: String,
  title: String,
  blogSlug: String,
  imgUrl: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Blog", blogSchema);
