import express from "express"
import {addAddress,editAddress,getByUserIdAddress,getByIdAddress} from "../controllers/address"
import {isLogin} from "../middlewares/auth/auth"



const router =express.Router()
router.use(isLogin)
router.get("/",getByUserIdAddress)
router.get("/:addressId",getByIdAddress)
router.post("/add-address",addAddress)
router.put("/edit-address/:addressId",editAddress)






export default router
