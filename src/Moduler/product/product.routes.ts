import express from 'express'
import validationRequest from '../../middleware/validationRequest'
import { productValidation } from './product.validation'
import { productController } from './product.controller'
import auth from '../../middleware/auth'
import { USER_ROLE } from '../user/user.const'

const route = express.Router()

route.post('/create-product', auth(USER_ROLE.superAdmin, USER_ROLE.manager), validationRequest(productValidation.productValidationSchema), productController.createProduct)
route.get('/get-products', auth(USER_ROLE.superAdmin, USER_ROLE.manager), productController.getAllProduct)
route.get('/get-product', auth(USER_ROLE.superAdmin, USER_ROLE.manager, USER_ROLE.seller), productController.getProduct)
route.get('/get-product/:id', auth(USER_ROLE.superAdmin, USER_ROLE.manager), productController.getAProduct)
route.delete('/delete-products', auth(USER_ROLE.superAdmin, USER_ROLE.manager), validationRequest(productValidation.productDelete), productController.deleteProduct)
route.post('/update-product/:id', auth(USER_ROLE.superAdmin, USER_ROLE.manager), validationRequest(productValidation.productUpdateSchema), productController.updateProduct)

export const productRoutes = route