import mongoose from 'mongoose'

export default () => {
    mongoose
        .connect(process.env.MONGODB_CONNECT, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log('Database connect successfuly.')
        })
        .catch(err => {
            console.log(err)
            console.log('Database connect error.')
        })
}
