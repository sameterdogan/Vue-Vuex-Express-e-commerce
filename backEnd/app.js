import express from 'express'
import dotenv from 'dotenv'
import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'
import swaggerOptions from "./config/swagger/swagger.config"
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

const swaggerDocs = swaggerJsDoc(swaggerOptions)
console.log(swaggerDocs)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

if (process.env.MODE === 'production') app.use(morgan('common'))
app.use(helmet())
app.use('/assets', express.static('assets'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/api', indexRouter)

app.use((err, req, res, next) => {
    let customError = err
    switch (err.name) {
        case 'SyntaxError':
            customError = new CustomError(err.message, 400)
            break
        case 'ValidationError':
            customError = new CustomError(err.message, 400)
            break
    }

    res.status(customError.status || 500).json({
        success: false,
        message: customError.message,
    })
    if (process.env.MODE === 'production') logger.error(customError)
})

export default app
