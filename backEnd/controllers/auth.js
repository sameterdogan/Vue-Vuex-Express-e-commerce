import UserModel from '../models/user'
import jwt from 'jsonwebtoken'
import CustomError from '../helpers/error/CustomError'

export const register = async (req, res, next) => {
    try {
        await UserModel.create(req.body)
        res.status(201).json({
            success: true,
            message: `"${req.body.email}" You can login using your e-mail account.`,
        })
    } catch (err) {
        next(err)
    }
}
export const login = async (req, res, next) => {
    const { email, password } = { ...req.body }
    const user = await UserModel.findOne({ email }).select('+password')

    if (!user) return next(new CustomError('Email is incorrect', 400))
    if (user.password !== password)
        return next(new CustomError('Password is incorrect.', 400))
    user.password = null
    const token = await jwt.sign({ user }, process.env.jwtSecretKey, {
        expiresIn: process.env.jwtExpire,
    })
    res.status(200).json({
        success: true,
        user,
        token,
    })
}

export const profileUser = async (req, res) => {
    res.status(200).json({
        success: true,
        user: req.user,
    })
}
