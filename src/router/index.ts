import express from 'express'
import { productRoutes } from '../Moduler/product/product.routes'
import { userRoutes } from '../Moduler/user/user.routes'
import { buyRoutes } from '../Moduler/buying/buying.route'
import { memberRoute } from '../Moduler/member/member.routes'

const router = express.Router()
const moduleRouters = [
    {
        path: '/product',
        router: productRoutes
    },
    {
        path: '/user',
        router: userRoutes
    },
    {
        path: '/member',
        router: memberRoute
    },
    {
        path: '/',
        router: buyRoutes
    },
]
moduleRouters.map(route => router.use(route.path, route.router))

export default router