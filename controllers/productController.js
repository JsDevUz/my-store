const Product = require('../module/productModel')

async function getProducts(req,res){
    try{
        const products = await Product.findAll()
        res.send(products)
    }catch(e){

    }
}

async function getProduct(req,res){
    try{
        const {id} = req.params
        const product = await Product.findById(id)

        if(!product){
            res.status(404).send({
                message: 'Product Not Found'
            })
        } else {
            res.send(product)
        }
    }catch(e){

    }
}

module.exports = {
    getProducts,
    getProduct
}