import ProductModel from '../models/product'
import CustomError from '../helpers/error/CustomError'
import asyncErrorWrapper from '../helpers/error/asyncErrorWrapper'




export const getProducts = async (req, res, next) => {
    const products = await req.getProductsQuery.lean()
    res.status(200).json({
        success: true,
        message: 'Products successfully listed.',
        products,
        isEndIndex: req.isEndIndex,
    })
}

export const getProductsByCategory = asyncErrorWrapper(async (req, res, next) => {
    const productsByCategory = await req.getProductsByCategoryQuery.lean()

    res.status(200).json({
        success: true,
        message: 'Products successfully listed.',
        productsByCategory,
    })
})

export const getNewArrivalsProducts = asyncErrorWrapper(async (req, res, next) => {
    const newArrivalsProducts = await ProductModel.find()
        .sort({ createdAt: 'desc' })
        .limit(5)
    res.status(200).json({
        success: true,
        message: 'New products have been successfully listed.',
        newArrivalsProducts,
    })
})

export const getBySlugProduct = asyncErrorWrapper(async (req, res, next) => {
    const product = await ProductModel.findOne({
        slugProduct: req.params.slugProduct,
    })
    if (!product) return next(new CustomError('Product not found', 404))
    const relatedProducts = await ProductModel.find({
        category: product.category,
        _id: { $ne: product._id },
    }).limit(6)
    res.status(200).json({
        success: true,
        message: 'Product information successfully brought.',
        product,
        relatedProducts,
    })
})

export const getQuickViewProduct = asyncErrorWrapper(async (req, res, next) => {
    const quickView = await ProductModel.findById(req.params.productId)
    if (!quickView) return next(new CustomError('Product not found', 404))
    res.status(200).json({
        success: true,
        message: 'Product information successfully brought.',
        quickView,
    })
})

export const addProduct = asyncErrorWrapper(async (req, res, next) => {
    req.body.image = req.productImage
    const newProduct = await ProductModel.create(req.body)
    res.status(201).json({
        success: true,
        message: 'The product has been successfully added.',
        newProduct,
    })
})

export const editProduct = asyncErrorWrapper(async (req, res, next) => {
    if (req.productImage) req.body['image'] = req.productImage

    let editProduct = await ProductModel.findById(req.params.productId)

    if (!editProduct) return next(new CustomError('No product found.', 404))

    for (const key in req.body) {
        editProduct[key] = req.body[key]
    }
    await editProduct.save()

    res.status(200).json({
        success: true,
        message: 'The product has been successfully updated.',
        editProduct,
    })
})

export const deleteProduct = asyncErrorWrapper(async (req, res, next) => {
    const product = await ProductModel.findById(req.params.productId)

    if (!product) return next(new CustomError('No product found.', 404))

    await product.remove()

    res.status(200).json({
        success: true,
        message: 'The product has been deleted successfully.',
    })
})
