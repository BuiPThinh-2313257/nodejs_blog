const { mongo } = require("mongoose");
const Schema = require("mongoose").Schema;

const Course = new Schema({
  name: String,
  description: String,
  image: String,
  createAt: { type: Date, default: Date.now },
  updAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Course", Course);
