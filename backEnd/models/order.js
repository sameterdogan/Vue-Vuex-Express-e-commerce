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
        enum:[0,1,2,3,],
        default:0
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

export default mongoose.model("Order",OrderSchema)