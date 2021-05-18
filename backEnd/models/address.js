import mongoose from 'mongoose'

const Schema = mongoose.Schema

const AddressSchema = new Schema({
    name: {
        type: String,
    },
    surname: {
        type: String,
    },
    phone: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    city: {
        cityName: { type: String, required: true },
        cityId: { type: Number, required: true },
    },
    district: {
        districtName: { type: String, required: true },
        districtId: { type: Number, required: true },
    },
    neighborhood: {
        neighborhoodName: { type: String, required: true },
        neighborhoodId: { type: Number, required: true },
    },
    address: {
        type: String,
        required: true,
    },
    zipCode: {
        type: String,
        required: true,
    },
})


export default mongoose.model('Address', AddressSchema)