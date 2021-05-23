import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const Schema = mongoose.Schema

const UserSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            set: function(value) {
                const fullNameArray = value.split(' ')
                value = ''
                fullNameArray.forEach(name => {
                    value += name.charAt(0).toUpperCase() + name.slice(1) + ' '
                })
                return value
            },
        },
        role: {
            type: String,
            default: 'user',
            enum: ['user', 'admin'],
        },
        email: {
            type: String,
            trim: true,
        },
        password: {
            type: String,
            trim: true,
            select: false,
        },
        slugName: {
            type: String,
        },
    },
    {
        timestamps: true,
    },
)

UserSchema.pre('save', function(next) {

    if (!this.isModified('password')) return (next)
    bcrypt.genSalt(10, (err, salt) => {
        if (err) return (next(err))
        bcrypt.hash(this.password, salt, (err, hash) => {
            if (err) return next(err)
            this.password = hash
            next()
        })
    })
})

export default mongoose.model('User', UserSchema)

