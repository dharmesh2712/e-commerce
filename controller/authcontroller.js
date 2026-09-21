const jwt = require('jsonwebtoken')
const User = require('../models/user')
const bcrypt = require('bcrypt')


const login = async(req,res)=>{
 const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).send({ message: 'Email and password are required' })
    }
    const user = await User.findOne({email:email})
    if(!user){
       return res.status(400).send({ message: 'user not found' })
    } 
    console.log("lllll",password,user.password)
    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
       return res.status(400).send({ message: 'credential wrong' })
    }
    const token = jwt.sign({id:user._id,role:user.role},'Ls7gzMp5RgIiynajZjwOgTZpW8yfJDUTc4vTuJerCrP',{expiresIn:'7d'})
    res.status(200).send({user,token:token})
}

const createUser = async(req,res)=>{
  try{
    let body = req.body
    let hashedPassword = await bcrypt.hash(body.password,10)
    body = {...body,password:hashedPassword}
    await User.create(body)
    res.status(200).send('create')
  }
  catch(error){
    res.status(500).send(error)
  }
}

module.exports = { login , createUser }