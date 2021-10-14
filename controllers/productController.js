const Product = require('../module/productModel')

async function getProducts(req,res){
    try{
        const products = await Product.findAll()
        res.send(products)
    }catch(e){

    }
}


module.exports = {
    getProducts
}