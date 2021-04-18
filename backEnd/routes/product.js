import express from 'express'
import productImageMuter from '../middlewares/libraries/multer/productImage'
import joiValidator from '../middlewares/libraries/joi/joi'
import productJoiSchema from '../helpers/joi/productSchema'
import { isAdmin, isLogin } from '../middlewares/auth/auth'
import productsQuery from '../middlewares/query/productQuery'
import productsByCategoryQuery from '../middlewares/query/productsByCategoryQuery'
import {
    addProduct,
    deleteProduct,
    editProduct,
    getProducts,
    getBySlugProduct,
    getProductsByCategory,
    getNewArrivalsProducts,
} from '../controllers/product'

const router = express.Router()

router.get('/', productsQuery, getProducts)

router.get('/category/:slugCategory', productsByCategoryQuery, getProductsByCategory)


router.get('/new-arrivals', getNewArrivalsProducts)

router.get('/:slugProduct', getBySlugProduct)


router.use(isLogin)
router.use(isAdmin)

router.post('/',
    productImageMuter.single('image'),
    joiValidator(productJoiSchema),
    addProduct,
)
router.put('/:productId',
    productImageMuter.single('image'),
    joiValidator(productJoiSchema),
    editProduct,
)
router.delete('/:productId', deleteProduct)



export default router
