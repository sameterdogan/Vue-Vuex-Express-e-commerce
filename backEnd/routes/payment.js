import express from 'express'
import {isLogin} from "../middlewares/auth/auth"
import {checkout,callbackUrl} from "../controllers/payment"

const router = express.Router()
router.post("/callback",callbackUrl)
router.use(isLogin)
router.post("/checkout/:orderId",checkout)




export default router
