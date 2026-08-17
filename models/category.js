const mongoose = require('mongoose')

const Category = new mongoose.Schema({
    name : {
        type : String,
        required:true,
        unique:true
    },
    type:{
        type:String,
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{timestamps:true})

module.exports = mongoose.model("Category",Category)