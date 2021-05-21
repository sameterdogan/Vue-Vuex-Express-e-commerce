import express from 'express'
import {getAllUsers,makeAdmin,makeUser } from "../controllers/user"

const router = express.Router()

router.get("/",getAllUsers)
router.put("/make-admin/:userId",makeAdmin)
router.put("/make-user/:userId",makeUser)


export default router