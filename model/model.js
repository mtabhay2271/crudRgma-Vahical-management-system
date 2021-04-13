const mongoose = require("mongoose");


//creating schema for course
const modelSchema = new mongoose.Schema({
  modelName: {
    type: String,
    required:true
  },
  yearId:{
    type:String
  },
  createdAt:{
    type:Date,
    default:Date.now
  }
});


module.exports = mongoose.model("model", modelSchema);
