import express from 'express'

import {checkout,callbackUrl} from "../controllers/payment"

const router = express.Router()

router.post("/checkout",checkout)

router.post("/callback",callbackUrl)


export default router
