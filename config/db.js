const mongoose = require('mongoose');

async function connectDB(){
    try{
        await mongoose.connect('mongodb://mongodb:27017/ecommerce')
        console.log("DATABASE CONENCTED")
    }
    catch(error){
        console.log(error)
    }
}

module.exports = connectDB