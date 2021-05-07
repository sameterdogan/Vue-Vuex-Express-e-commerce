import mongoose from "mongoose"

const Schema= mongoose.Schema

const AddressSchema= new Schema({
    name:{
      type:String
    },
    surname:{
      type:String
    },
    phone:{
        type:String,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    city:{
        type: String,
        required: true,
    },
    district:{
        type:String,
        required:true,
    },
    neighborhood:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    zipCode:{
        type:String,
        required:true
    }
})



export default mongoose.model("Address",AddressSchema)