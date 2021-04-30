import mongoose from 'mongoose'

const Schema= mongoose.Schema

const OrderSchema=new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    items:[],
    totalPrice:{
        type:Number,
    }
})

export default mongoose.model("Order",OrderSchema)