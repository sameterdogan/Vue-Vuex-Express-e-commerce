import mongoose from 'mongoose'
import ProductModel from "./product"
const Schema= mongoose.Schema

const OrderSchema=new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    status:{
        type:'Number',
        enum:[0,1,2,3,],
        default:1
        //0=sipariş hazırlanıyor :is preparing
        //1=reddedildi          :Rejected
        //2=kargoda             :in cargo
        //3=teslim edildi       :was delivered
    },
    address:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Address",
        required:true
    },
    items:[],
    totalPrice:{
        type:Number,
    },

})


OrderSchema.pre('findOneAndUpdate', async function (next) {

    console.log(this.getQuery());
    const order= await this.model.findOne(this.getQuery());
    console.log(order)

    for (const product of order.items) {
         await ProductModel.findByIdAndUpdate(product._id,{ $inc: { stock: Number(-(product.quantity)) }})
    }

    next();
});

export default mongoose.model("Order",OrderSchema)