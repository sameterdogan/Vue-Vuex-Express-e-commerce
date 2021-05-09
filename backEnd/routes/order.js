import express from 'express'
import {isLogin} from "../middlewares/auth/auth"
import {addOrder} from "../controllers/order"

const router = express.Router()

router.use(isLogin)
router.post("/add-order",addOrder)

export default router
