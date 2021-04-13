const mongoose = require("mongoose");


//creating schema for course
const makeSchema = new mongoose.Schema({
  
  make:{
    type:String,
    required:true,
  },
  createdAt:{
    type:Date,
    default:Date.now
  }
});


module.exports = mongoose.model("make", makeSchema);
