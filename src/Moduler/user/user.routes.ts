import express from 'express'
import validationRequest from '../../middleware/validationRequest'
import { userValidation } from './user.validation'
import { userController } from './user.controller'
import auth from '../../middleware/auth'
import { USER_ROLE } from './user.const'

const route = express.Router()

route.post('/create-superAdmin', auth(USER_ROLE.superAdmin), validationRequest(userValidation.userValidationSchema), userController.createSuperAdmin)
route.post('/create-manager', auth(USER_ROLE.superAdmin), validationRequest(userValidation.userValidationSchema), userController.createManager)
route.post('/create-seller', validationRequest(userValidation.userValidationSchema), userController.createSeller)
route.post('/login', validationRequest(userValidation.logInSchema), userController.login)

export const userRoutes = route