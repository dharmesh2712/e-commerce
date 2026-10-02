const User =  require('../models/user')
const bcrypt = require('bcrypt')
const multer = require('multer')



const uploadProfile = async(req,res) =>{
  const {userId} = req.params
  let user = await User.findByIdAndUpdate(userId,{profilePhoto:req.file.path},{new:true})
  res.status(200).send(user)
}

const getUser = async(req,res)=>{
  const {page,limit} = req.query;
  console.log(page,limit)
  let skip = Number(page-1) * Number(limit)
  console.log(skip)
  let users = await User.find().skip(skip).limit(limit)
  res.status(200).send(users)
}

module.exports = {uploadProfile,getUser}