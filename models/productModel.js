const products = require("../data.json");

const { v4: uuid } = require("uuid");
const { writeDataToFile } = require("../utils");

findAll = () => {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
};

findById = (id) => {
  return new Promise((resolve, reject) => {
    const product = products.find((p) => p.id === id);
    resolve(product);
  });
};

createProduct = (product) => {
  return new Promise((resolve, reject) => {
    const newProduct = {
      id: uuid(),
      ...product,
    };
    products.push(newProduct);
    writeDataToFile("./data.json", products);
    resolve(newProduct);
  });
};

updateProduct = (product, id) => {
    console.log('model')
  return new Promise((resolve, eject) => {
    const oneProduct = products.find((p) => p.id === id);
    if (!product) {
        console.log('errer')
    } else {
      const index = products.findIndex((i) => i.id === id);
      const newProduct = {
        name: product.name || oneProduct.name,
        description: product.description || oneProduct.description,
        price: product.price || oneProduct.price,
      };
      products[index] = {
        id: id,
        ...newProduct,
      };
      console.log(products)
      writeDataToFile("./data.json", products);
      resolve(newProduct);
    }
  });
};

deleteProduct = (id) => {
  return new Promise((resolve, reject) => {
    newProducts = products.filter(p => p.id !== id)
    writeDataToFile("./data.json", newProducts);
    resolve('Dleted');
  });
};

module.exports = { findAll, findById, createProduct, updateProduct, deleteProduct };
