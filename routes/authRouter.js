const {Router} = require('express')

const {login} = require('../controllers/authController')
const {validation} = require('../middlewares/authValidationMiddleware')
const router = Router()

router.post('/login', validation, login)

module.exports = {
  authRouter: router
}