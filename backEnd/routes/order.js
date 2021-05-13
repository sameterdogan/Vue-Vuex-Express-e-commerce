import express from 'express'
import {isLogin} from "../middlewares/auth/auth"
import {addOrder,getUserOrders,getOrderById} from "../controllers/order"
import { get } from 'mongoose'

const router = express.Router()

router.use(isLogin)
router.get("/",getUserOrders)
router.get("/:orderId",getOrderById)
router.post("/add-order",addOrder)


export default router
