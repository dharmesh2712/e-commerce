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
      // {
      //   $match:{
      //     stock:{$lt:10}
      //   }
      // },{
      //   $project:{
      //     _id:0,
      //     name:1,
      //     stock:1,
      //     price:1
      //   }
      // }
      ////////////////////////////////////
      // {
      //   $match:{
      //     price:{$gt:50000}
      //   }
      // },{
      //    $match:{
      //     stock:{$gt:0}
      //   }
      // },{
      //   $project:{
      //     _id:0,
      //     price:1,
      //     stock:1
      //   }
      // }
      //////////////////////////////////////
      // {
      //   $sort:{
      //      price:-1
      //   }
      // },{
      //   $project:{
      //      _id:0,
      //      name:1,
      //      price:1
      //   }
      // },{
      //   $limit:10
      // }
      //////////////////////////////////////////
      {
        $group:{
          _id:null,
          averagePrice:{$avg:"$price"}
        }
      }
    ]);
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

const cartAnalatics = async (req, res) => {
  try {
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
      // {
      //   $unwind: "$items",
      // },
      // {
      //   $lookup: {
      //     from: "products",
      //     as: "item",
      //     localField: "items.productId",
      //     foreignField: "_id",
      //   },
      // },
      // {
      //   $unwind: "$item"
      // },
      // {
      //   $project:{
      //     _id:1,
      //     cartPrice:{$multiply:["$items.quantity","$item[0].price"]}
      //   }
      // },
      // {
      //   $group:{
      //     _id:"$_id",
      //     totalCartPrice:{$sum:'$cartPrice'}
      //   }
      // }
      ////////////////////////////
      // {
      //   $lookup: {
      //     from: "users",
      //     as: "user",
      //     localField: "userId",
      //     foreignField: "_id",
      //   },
      // },{
      //   $unwind:"$items"
      // },{
      //    $group:{
      //     _id:"$userId",
      //     userId:{$first:"$userId"},
      //     username:{$first:{$arrayElemAt:["$user.name",0]}},
      //     totalCartitem:{$sum:1}
      //    }
      // },
      ///////////////////////////////
      // {
      //   $unwind: "$items",
      // },
      // {
      //   $group: {
      //     _id: "$items.productId",
      //     totalCart: { $sum: 1 },
      //   },
      // },
      // {
      //   $sort: { totalCart: -1 },
      // },
      // {
      //   $lookup: {
      //     from: "products",
      //     as: "product",
      //     localField: "_id",
      //     foreignField: "_id",
      //   },
      // },
      /////////////////////////////////
      
      
    ]);
    res.status(200).send(cart);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { productAnalytics, cartAnalatics };
