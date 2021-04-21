import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const Schema = mongoose.Schema

const UserSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            set: function (value) {
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
            default: 'customer',
            enum: ['customer', 'admin'],
        },
        email: {
            type: String,
            trim: true,
        },
        block: {
            type: Boolean,
            default: false,
        },
        password: {
            type: String,
            trim: true,
            select: false,
        },
        profileImage: {
            type: String,
            default: 'default.png',
        },
        slugName: {
            type: String,
        },
        forgotPasswordToken: {
            type: String,
            default: undefined,
        },
        forgotPasswordTokenExpire: {
            type: Date,
            default: undefined,
        },
    },
    {
        timestamps: true,
    }
)

UserSchema.pre('save', async function (next) {
    try {
        if(!this.isModified("password")) return(next)
        this.password = bcrypt.hash(this.password, 10)
        next()
    } catch (err) {
        next(err)
    }
})

export default mongoose.model('User', UserSchema)

