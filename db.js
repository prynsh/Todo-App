const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://prynsh:Priyal2112@cluster0.vi5pepe.mongodb.net/todos");

const todoSchema=mongoose.Schema({
    title:String,
    description: String,
    completed:Boolean,
})

const todo= mongoose.model("todo", todoSchema);
module.exports({
    todo:todo
})