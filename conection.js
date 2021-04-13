const mongoose = require("mongoose"); // vedio

const Connection = mongoose.connect('mongodb+srv://Myapp12345:Myapp12345@data1.kilqe.mongodb.net/vehicle?retryWrites=true&w=majority', {  useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false,useCreateIndex: true},
    console.log("connected successfully")
    );
 
module.exports = Connection;
