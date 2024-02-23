import express from 'express'
import validationRequest from '../../middleware/validationRequest'
import { buyerValidation } from './buying.validation'
import { buyingController } from './buying.controller'
import auth from '../../middleware/auth'
import { USER_ROLE } from '../user/user.const'

const route = express.Router()

route.post('/buy/:id', auth(USER_ROLE.seller, USER_ROLE.superAdmin), validationRequest(buyerValidation.buyerValidationSchema), buyingController.createBooking)
route.get('/salehistory', auth(USER_ROLE.seller, USER_ROLE.superAdmin), buyingController.getAllBookings)

export const buyRoutes = route