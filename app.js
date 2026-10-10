const express = require('express')
const userRoute = require('./src/routes/userroutes')
const authRoute = require('./src/routes/authroutes')
const authMiddleware = require('./middleware/auth')
const categoryRoute = require('./src/routes/categoryroutes')
const permissionMiddleware = require('./middleware/permission')
const productRoute = require('./src/routes/productroutes')
const cartRoute = require('./src/routes/cartroutes')
const scriptRoute = require('./src/routes/scriptroutes')
const analyticsRoute = require('./src/routes/analyticsroutes')

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