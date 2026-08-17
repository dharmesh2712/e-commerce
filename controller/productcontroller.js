const Product = require("../models/product");

const create = async (req, res) => {
  try {
    let productData = req.body;

    productData = { ...productData, createdBy: req.userId };

    await Product.create(productData);

    res.status(200).send("Product Created");

  } 
  catch (error) {
    res.status(500).send(error);
  }

};


const uploadProductImage = async(req,res) =>{
  const {productId} = req.params
  let product = await Product.findByIdAndUpdate(productId,{image:req.file.path},{new:true})
  res.status(200).send(product)
}

module.exports = {create , uploadProductImage}