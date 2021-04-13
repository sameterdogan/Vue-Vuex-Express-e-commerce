import express from "express"
import {addCategory,editCategory,deleteCategory,getCategories,getByIdCategory} from  "../controllers/category"

const router =express.Router()

router.get("/",getCategories)
router.get("/:categoryId",getByIdCategory)
router.post("/",addCategory)
router.put("/:categoryId",editCategory)
router.delete("/:categoryId",deleteCategory)



export default router
