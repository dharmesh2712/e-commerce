const express = require('express')
const userRoute = require('./routes/userroutes')
const authRoute = require('./routes/authroutes')
const authMiddleware = require('./middleware/auth')
const categoryRoute = require('./routes/categoryroutes')
const permissionMiddleware = require('./middleware/permission')
const productRoute = require('./routes/productroutes')
const cartRoute = require('./routes/cartroutes')
const scriptRoute = require('./routes/scriptroutes')
const analyticsRoute = require('./routes/analyticsroutes')

const app = express()

app.use(express.json());

app.use('/auth',authRoute)
app.use('/user',authMiddleware.auth,userRoute)
app.use('/category',authMiddleware.auth,categoryRoute)
app.use('/product',authMiddleware.auth,productRoute)
app.use('/cart',authMiddleware.auth,cartRoute)
app.use('/script',scriptRoute)
app.use('/analytics',analyticsRoute)
            

module.exports = app