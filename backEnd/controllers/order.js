import OrderModel from '../models/order'
import ProductModel from '../models/product'
import CustomError from "../helpers/error/CustomError"
import asyncErrorWrapper from "../helpers/error/asyncErrorWrapper"

export const allOrders=asyncErrorWrapper(async (req,res,next)=>{
    const allOrders=await OrderModel.find()
        .populate([{path:"address"},{path:"user"}])

    res.status(200).json({
        success:true,
        message:"All orders brought in successfully",
        allOrders
    })
})
export const addOrder = asyncErrorWrapper(async (req, res, next) => {
    req.body["user"]=req.user._id
    const orderInfo = req.body
    console.log(orderInfo.items[0].category)
    const productIdes = orderInfo.items.map(product => product._id)
    console.log(orderInfo)
    let databaseProducts = await ProductModel.find({ _id: productIdes }).populate("category").lean();

     databaseProducts = orderInfo.items.map(product =>{
         product.category1=product.category
         return product
     })
    const stockError= ProductModel.stockCheckProduct(databaseProducts,orderInfo.items)
    if (stockError.messages.length >= 1) {
        return res.status(400).json({
            success:false,
            messages:stockError.messages,
            stockErrorProductsIdAndStock:stockError.productsIdAndStock
        })
    }

    orderInfo.items=databaseProducts

    const order = await OrderModel.create({ ...orderInfo })
    res.status(201).json({
        success: true,
        message: 'new order successfully added',
        order,
    })

})
export const getUserOrders=asyncErrorWrapper(async (req,res,next)=>{
    console.log(req.user)
    const orders=await OrderModel.find({user:req.user._id,status:{$ne:1}}).populate([{path:"user"},{path:"address"}])
    res.status(200).json({
        success:true,
        message:"User's orders listed.",
        orders
    })
})
export const getOrderById=asyncErrorWrapper(async (req,res,next)=>{
    const order=await OrderModel.findById(req.params.orderId).populate([{path:"user"},{path:"address"}])
    res.status(200).json({
        success:true,
        message:"The order has been brought.",
        order
    })
})