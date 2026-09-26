const Category = require("../models/category");
const mongoose = require("mongoose");


const create = async (req, res) => {
  console.log("lklkl")
  const session = await mongoose.startSession();
  try {
    await session.startTransaction();
    let body = req.body;
    body = { ...body, createdBy: req.userId }; 
    await Category.create([body],{session});
    console.log('kkkk')
    await Category.findByIdAndUpdate(['6a7df21723bd0bbc50214b8c',{$set:{name:'dd'}}],{session})
    await session.commitTransaction();
    res.status(200).send("Category created");
  } catch (error) {
    res.status(400).send(error);
    await session.abortTransaction();
  } finally {
    session.endSession();
  }
};

module.exports = { create };
