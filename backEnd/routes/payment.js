import express from 'express'
import {isLogin} from "../middlewares/auth/auth"
import {checkout,callbackUrl} from "../controllers/payment"

const router = express.Router()

router.use(isLogin)
router.post("/checkout",checkout)

router.post("/callback",callbackUrl)


export default router
