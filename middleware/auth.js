const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async(req,res,next)=>{
    try{
        let token = req.headers.authorization
        token = token.split(' ')[1] 
        const isValid =  jwt.verify(token,'Ls7gzMp5RgIiynajZjwOgTZpW8yfJDUTc4vTuJerCrP')
        const dcryptToken =  jwt.decode(token)
        const findUser = await User.findById(dcryptToken.id)
        if(!findUser){
            res.status(402).send('User not found ')
        }
        req.userId = dcryptToken.id
        req.role = dcryptToken.role
        next()
    }
    catch(error){
        res.status(401).send(error)
    }
}

module.exports = { auth }