import joi from 'joi'

export default joi.object().keys({
    name: joi.string().min(2).max(50),
    description: joi.string().min(50),
    price: joi.number().min(2),
    stock: joi.number().min(2),
    category: joi.string().required(),
})
