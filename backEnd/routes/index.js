import express from "express"
import categoryRouter from "./category"
import productRouter from "./product"
import authRouter from  "./auth"

const router =express.Router()

router.use("/category",categoryRouter)
router.use("/product",productRouter)
router.use("/auth",authRouter)


export default router
