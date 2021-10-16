const Router = require("express")

const router = Router()
const {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
  } = require("../controllers/productController");
const { checkProduct } = require("../middlewares/productValidationMiddleware");

router.get('/',getProducts);
router.get('/:id',getProduct);
router.post('/',checkProduct,createProduct); 
router.put('/:id',checkProduct,updateProduct);
router.delete('/:id',deleteProduct);

module.exports = {productRouter: router}