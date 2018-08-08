var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const videoSchema = new Schema({
    title: String,
    url: String,
    description: String
})

module.exports = mongoose.model("videoSchema", videoSchema, "videoSchema");