const User = require("../models/user");
const Product = require("../models/product");
const Category = require("../models/category");
const Cart = require("../models/cart");

const productAnalytics = async (req, res) => {
  try {
    const product = await Product.aggregate([
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
      ////////////////////////////

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
      ///////////////////////       ////////////////////
      //   {
      //     $lookup:{
      //         from:'categories',
      //         as:'category',
      //         localField:'categoryId',
      //         foreignField:'_id'
      //     }
      //   },{
      //      $unwind: "$category"
      //   }
      // ,{
      //     $match:{
      //       "category.name":"Mobiles"
      //     }
      //   }
      ///////////////////////////
      //  {
      //   $count:'totalProduct'
      //  }
      //////////////////////////////
      // {
      //   $group: {
      //     _id: null,
      //     averagePrice: { $avg: "$price" },
      //   }
      // }
      /////////////////////////////
      // {
      //  $group:{
      //    _id:null,
      //    minPrice:{ $min : "$price"},
      //    maxPrice:{$max:"$price"},
      //    avgPrice:{$avg:"$price"}
      //  }
      // }
      /////////////////////////////
      // {
      //   $group: {
      //     _id:null,
      //     stock:{$sum:'$stock'}
      //   },
      // },
      // {
      //   $project:{
      //     'stock':1,
      //     _id:0
      //   }
      // }
      //////////////////////////////
      // {
      //   $lookup: {
      //     from: "categories",
      //     as: "category",
      //     localField: "categoryId",
      //     foreignField: "_id",
      //   },
      // },{
      //   $unwind:'$category'
      // },{
      //   $group:{
      //     _id:"$category.name",
      //     totalProduct:{$sum:1}
      //   }
      // }
      ////////////////////////////
      // {
      //   $lookup: {
      //     from: "categories",
      //     as: "category",
      //     localField: "categoryId",
      //     foreignField: "_id",
      //   },
      // },{
      //   $unwind:'$category'
      // },{
      //   $group:{
      //     _id:"$category.name",
      //     avgProdPrice:{$avg:'$price'}
      //   }
      // }
      //////////////////////
      // {
      //   $lookup: {
      //     from: "categories",
      //     as: "category",
      //     localField: "categoryId",
      //     foreignField: "_id",
      //   },
      // },{
      //   $unwind:'$category'
      // },
      // {
      //   $group:{
      //     _id:"$category.name",
      //     totalProduct:{$sum:1},
      //   }
      // },{
      //   $sort:{totalProduct:-1}
      // },{
      //   $group:{
      //     _id:null,
      //     category:{$first:"$_id"},
      //     product:{$max:'$totalProduct'}
      //   }
      // }
      ////////////////////////////////////
     
    ]);
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

const cartAnalatics = async(req,res)=>{
  try{
     const cart = await Cart.aggregate([
        // {
        //  $project:{
        //   userId:1,
        //   totalProduct : {$size:'$items'}
        //  }
        // },{
        //   $match:{
        //     totalProduct:{
        //       $gte:4
        //     }
        //   }
        // }
        ////////////////
        // {
        //  $project:{
        //   userId:1,
        //   totalProduct : {$size:'$items'}
        //  }
        // },{
        //   $group:{
        //     _id:null,
        //     overallProduct : {$sum:'$totalProduct'}
        //   }
        // }
        ////////////////
        {
          $unwind:'$items'
        },{
          $group:{
            _id:"$_id"
          }
        }
     ])
   res.status(200).send(cart);

  }catch(error){
   res.status(500).send("Internal Server Error");
  }
}

module.exports = { productAnalytics ,cartAnalatics };
