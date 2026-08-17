const User =  require('../models/user')
const bcrypt = require('bcrypt')
const multer = require('multer')



const uploadProfile = async(req,res) =>{
  const {userId} = req.params
  let user = await User.findByIdAndUpdate(userId,{profilePhoto:req.file.path},{new:true})
  res.status(200).send(user)
}

module.exports = {uploadProfile}