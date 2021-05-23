import express from 'express'
import dotenv from 'dotenv'
import dbConnect from './helpers/database/dbConnect'
import cors from 'cors'
import indexRouter from './routes/index'
import CustomError from './helpers/error/CustomError'
import logger from './config/logger/logger.config'
import morgan from 'morgan'
import helmet from 'helmet'

dotenv.config({ path: './config/env/config.env' })
dbConnect()

const app = express()


if (process.env.MODE === 'production') app.use(morgan('dev'))
app.use(helmet())
app.use('/assets', express.static('assets'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/api', indexRouter)

app.use((err, req, res, next) => {
    let customError =null
    switch (err.name) {
        case 'SyntaxError':
            customError = new CustomError(err.message, 400)
            break
        case 'ValidationError':
            customError = new CustomError(err.message, 400)
            break
        default :
            customError = new CustomError("We encountered a systemic problem and we will solve it as soon as possible.", 500)
    }

    res.status(customError.status).json({
        success: false,
        message: customError.message,
    })
    if (process.env.MODE === 'production') logger.error(customError)
})

export default app
