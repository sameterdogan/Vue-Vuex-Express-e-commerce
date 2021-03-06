import express from "express"
import categoryRouter from "./category"
import productRouter from "./product"
import authRouter from  "./auth"
import orderRouter from "./order"
import address from "./address"
import payment from "./payment"
import user from "./user"
const router =express.Router()

router.use("/category",categoryRouter)
router.use("/product",productRouter)
router.use("/auth",authRouter)
router.use("/order",orderRouter)
router.use("/address",address)
router.use("/payment",payment)
router.use("/user",user)



export default router
