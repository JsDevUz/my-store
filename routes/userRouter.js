const {Router} = require('express')

const {createUser} = require('../controllers/userController')
const { userValidation } = require('../middlewares/userValidationMiddleware')

const router = Router()

router.post('/', userValidation, createUser)

module.exports = {
  userRouter: router
} 