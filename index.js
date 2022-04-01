const express = require('express')
const cors = require('cors')
const products = require('./productsApi')
const shop = require('./shopApi')
// ddddad
const app = express()

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send('Welcome')
})

app.get('/products',(req,res)=>{
    res.send(products)
})

app.get('/shop',(req,res)=>{
    res.send(shop)
})

const port  = process.env.PORT || 5000


app.listen(port,console.log('Server STARTed'))