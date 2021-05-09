import OrderModel from '../models/order'
import ProductModel from '../models/product'
import CustomError from "../helpers/error/CustomError"
import asyncErrorWrapper from "../helpers/error/asyncErrorWrapper"


export const addOrder = asyncErrorWrapper(async (req, res, next) => {
    console.log("çalıştı")
    req.body["user"]=req.user._id
    console.log(req.body)
    const orderInfo = req.body
    const productIdes = orderInfo.items.map(product => product._id)
    const databaseProducts = await ProductModel.find({ _id: productIdes })
    const stockError= ProductModel.stockCheckProduct(databaseProducts,orderInfo.items)

    if (stockError.messages.length >= 1) {
        return res.status(400).json({
            success:false,
            messages:stockError.messages,
            stockErrorProductsIdAndStock:stockError.productsIdAndStock
        })
    }

    const order = await OrderModel.create({ ...orderInfo })
    res.status(201).json({
        success: true,
        message: 'new order successfully added',
        order,
    })

})