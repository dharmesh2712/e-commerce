const Cart = require('../models/cart')


const addToCart = async(req,res)=>{
    try{
        const {productId} = req.params
        const {quantity} = req.body
        const cartData = {
            userId: req.userId,
            items:[{
                productId:productId,
                quantity:quantity
            }]
        }
        await Cart.create(cartData)
        res.status(200).send('Added to cart')

    }
    catch(error){
        res.status(500).send(error)
    }
}

module.exports = {addToCart}