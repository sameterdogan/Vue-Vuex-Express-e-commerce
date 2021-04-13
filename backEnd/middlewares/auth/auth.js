import jwt from 'jsonwebtoken'
import CustomError from '../../helpers/error/CustomError'
import { contentToken, headersCheckToken } from '../../helpers/auth/token'

export const isLogin = async (req, res, next) => {
    try {
        if (!headersCheckToken(req))
            return next(new CustomError('Bu adrese erişim hakkın yok !', 401))
        const token = contentToken(req)
        console.log('geldiasd')
        const verifiedToken = await jwt.verify(token, process.env.jwtSecretKey)
        req.user = verifiedToken.user
        console.log('gitti')
        next()
    } catch (err) {
        console.log(err)
        next(new CustomError('Geçersiz token veya süresi dolmuş.', 403))
    }
}

export const isAdmin = async (req, res, next) => {
    const user = req.user
    if (user.role !== 'Admin')
        return next(new CustomError('Buraya sadece adminler girebilir.', 403))
    next()
}
