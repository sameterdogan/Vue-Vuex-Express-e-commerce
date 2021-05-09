import mongoose from 'mongoose'

const Schema= mongoose.Schema

const OrderSchema=new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    status:{
        type:'Number',
        enum:[0,1,2],
        default:0
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

export default mongoose.model("Order",OrderSchema)