const Product = require("../models/productModel");

async function getProducts(req, res) {
  try {
    const products = await Product.findAll();
    res.send(products);
  } catch (e) {}
}

async function getProduct(req, res) {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) {
      res.status(404).send({
        message: "Product Not Found",
      });
    } else {
      res.send(product);
    }
  } catch (e) {}
}

async function createProduct(req, res) {
  const { name, description, price } = req.body;
  const product = {
    name,
    description,
    price,
  };
  try {
    const newProduct = await Product.createProduct(product);
    res.send(newProduct);
  } catch (e) {
    console.log(e);
  }
}
async function updateProduct(req, res) {
  const { name, description, price } = req.body;
  const {id} = req.params
  const isTrue = await Product.findById(id)
  const product = {
    name,
    description,
    price,
  };
  console.log(product)
  try {
    if(!isTrue){
      res.send({message: 'Product not found'})
    }
    const newProduct = await Product.updateProduct(product,id);
    res.send(newProduct);
    console.log(id)
  } catch (e) {
    console.log(e);
  }
} 
async function deleteProduct(req, res) {
  const {id} = req.params
  const product = await Product.findById(id)
  try {
    if(!product){ 
      res.send({message: 'Product not found'})
    }
    const newProduct = await Product.deleteProduct(id);
    res.send(newProduct);
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
};
