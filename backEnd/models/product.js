import mongoose from 'mongoose'
import appRootPath from 'app-root-path'

const rootDir = appRootPath.path
import path from 'path'
import fs from 'fs'
import slugify from 'slugify'

const Schema = mongoose.Schema

const ProductSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        stock: Number,
        price: Number,
        image: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            enum: ['Male', 'Female', 'Other'],
        },
        color: {
            type: String,
            enum: ['Black', 'White', 'Brown'],
        },
        category: {
            type: String,
            ref: 'Category',
            required: true,
        },
        slugProduct: { type: String },
    },
    {
        timestamps: true,
    },
)


ProductSchema.pre('save', function(next) {
    console.log(this)
    if (!this.isModified('name')) {
        return next()
    }
    const slugProduct = slugify(this.name, {
        replacement: '-',
        remove: /\W|_/g,
        lower: true,
    })
    this.slugProduct = slugProduct
    next()
})

ProductSchema.pre('remove', function(next) {
    fs.unlink(path.join(rootDir, '/assets/images/productImages/' + this.image))
        .catch(err => console.log(err))
    next()
})

ProductSchema.statics.stockCheckProduct = (products, orderProducts) => {
    const stockError={
        messages:[],
        productsIdAndStock:[]
    }

    products.forEach(product => {

        for (const orderProduct of orderProducts) {
            if (String(product._id) === orderProduct._id) {
                if (product.stock < orderProduct.quantity) {
                    stockError.messages.push(`${product.name} You can buy a maximum of ${product.stock} products.`)
                    stockError.productsIdAndStock.push({_id:product._id,stock:product.stock})
                }
            }
        }
    })
    return stockError


}
export default mongoose.model('Product', ProductSchema)

