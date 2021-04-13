import express from "express"
import {register, login, profileUser} from "../controllers/auth.js"
import {isLogin} from "../middlewares/auth/auth"


const router =express.Router()

router.post("/register",register)
router.post("/login",login)
router.use(isLogin)
router.get("/me",profileUser)




export default router
