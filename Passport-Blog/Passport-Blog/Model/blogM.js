const mongoose = require("mongoose");
const blogModel = mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  author: {
    type: String,
  },
});
const blogData = mongoose.model("blogData", blogModel);
module.exports = blogData;
