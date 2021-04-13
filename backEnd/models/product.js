import mongoose from 'mongoose'
import appRootPath from 'app-root-path'

const rootDir = appRootPath.path
import path from 'path'
import fs from 'fs'
import slugify from 'slugify'
import asyncErrorWrapper from '../helpers/error/asyncErrorWrapper'

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
            ref: 'category',
            required: true,
        },
        slugProduct: { type: String },
    },
    {
        timestamps: true,
    }
)

ProductSchema.pre('save', function (next) {
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

/*ProductSchema.pre(
    'remove',
    asyncErrorWrapper(async function (next) {
        await fs.unlinkSync(
            path.join(rootDir, '/assets/images/productImages/' + this.image)
        )
        next()
    })
)*/

const ProductModel = mongoose.model('Product', ProductSchema)

export default ProductModel
