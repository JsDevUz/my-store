const express = require("express");
const app = express();

const uuid = require("uuid");
const fs = require("fs");
const products = require("./data.json");

const {getProducts} = require('./controllers/productController')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/products", getProducts)

app.get("/api/products/:productId", (req, res) => {
  const { productId } = req.params;
  const product = products.find((p) => p.id == productId);

  if (!product) {
    res.send({
      message: "Product Not fund",
    });
  } else {
    res.send(product);
  }
});

app.post("/api/products", (req, res) => {
  const { name, description, price } = req.body;
  console.log(req.body);
  const product = {
    id: uuid.v4(),
    name,
    description,
    price,
  };

  products.push(product);
  fs.writeFile(
    "data.json",
    JSON.stringify(products, null, 2),
    "utf-8",
    (err) => {
      if (err) {
        res.send({
          message: "Error in creation",
        });
      } else {
        res.status(201).send({
          message: "Product has been created",
        });
      }
    }
  );
})

app.put('/api/products/:productId',(req,res) => {
    const { name, description, price} = req.body
    const {productId} = req.params

    const product = products.find((p) => p.id === productId)

    if(!product){
        res.send({
            message: 'Product Not Found'
        })
    } else {
        newProduct = {
            name: name || product.name,
            description: description || product.description,
            price: price || product.price
        }

        const index = products.findIndex((i) => i.id === productId)

        products[index] = {
          id: productId,
          ...newProduct,
        }
        fs.writeFile(
          "data.json",
          JSON.stringify(products, null, 2),
          "utf-8",
          (err) => {
            if (err) {
              res.send({
                message: "Error in creation",
              });
            } else {
              res.status(200).send({
                message: "Product has been created",
              });
            }
          }
        );
    }

})

app.delete('/api/products/:productId',(req,res) => {
  const {productId} = req.params
  const newProducts = products.filter(p => p.id !== productId)
  fs.writeFile(
    "data.json",
    JSON.stringify(newProducts, null, 2),
    "utf-8",
    (err) => {
      if (err) {
        res.send({
          message: "Error in creation",
        });
      } else {
        res.status(200).send({
          message: "Product has been created",
        });
      }
    }
  );
})

app.listen(3000, () => console.log("Server is running"));
