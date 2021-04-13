import mongoose from 'mongoose'
import slugify from 'slugify'

const Schema = mongoose.Schema

const CategorySchema = new Schema(
    {
        category: {
            type: String,
            trim: true,
        },
        slugCategory: String,
    },
    {
        timestamps: true,
    }
)

CategorySchema.pre('save', function (next) {
    if (!this.isModified('category')) {
        console.log('geldi gitti')
        return next()
    }
    const slug = slugify(this.category, {
        replacement: '-',
        remove: /[*+~.()?'"!:@#]/g,
        lower: true,
    })
    this.slugCategory = slug
    next()
})

export default mongoose.model('Category', CategorySchema)
