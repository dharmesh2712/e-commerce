const Category = require('../models/category')
const mongoose = require('mongoose')

const create = async(req,res)=>{
    try{
        let body = req.body
         body = {...body,createdBy:req.userId}
        await Category.create(body)
        res.status(200).send('Category created')
    }
    catch(error){
        res.status(400).send(error)
    }
}

module.exports = {create}