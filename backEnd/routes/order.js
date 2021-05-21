import express from 'express'
import {isLogin} from "../middlewares/auth/auth"
import {addOrder,getUserOrders,getOrderById,allOrders} from "../controllers/order"


const router = express.Router()

router.use(isLogin)
router.get("/allOrders",allOrders)
router.get("/",getUserOrders)
router.get("/:orderId",getOrderById)
router.post("/add-order",addOrder)


export default router
