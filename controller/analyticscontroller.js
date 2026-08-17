const User = require('../models/user');
const Product = require('../models/product')
const Category = require('../models/category')
const cart = require('../models/cart')

const productAnalytics = async(req,res)=>{
   try{
       const product =  await Product.aggregate([
        //    {
        //        $match:{
        //            stock:{
        //                $lt:10
        //            }
        //        }
        //    },{
        //        $sort:{
        //          stock:1
        //        }
        //    }
 

        // {
        //     $match:{
        //         price:{
        //             $gt:50000
        //         },
        //         stock:{
        //             $gt:0
        //         }
        //     }
        // },{
        //     $sort:{
        //          stock:1
        //        } 
        // }
       ])
       res.status(200).send(product)
   }
   catch(error){
       res.status(500).send('Internal Server Error')
   }
}

module.exports = {productAnalytics}