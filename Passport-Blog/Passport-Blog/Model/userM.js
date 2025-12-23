const mongoose = require("mongoose");
const userModel = mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  }
});
const userData = mongoose.model("passportData", userModel);
module.exports = userData;
