const mongoose = require("mongoose");


//creating schema for course
const yearSchema = new mongoose.Schema({
  makeId:{
    type:String,
    required:true
  },
  year:{
    type:Number

  },
  createdAt:{
    type:Date,
    default:Date.now
  }
});


module.exports = mongoose.model("year", yearSchema);
