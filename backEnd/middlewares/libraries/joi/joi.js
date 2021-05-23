export default schema => {
    return async (req, res, next) => {
        try {
            await schema.validateAsync(req.body, {
                abortEarly: false,
                allowUnknown: true,
            })
            next()
        } catch (err) {
            if ((err.name = 'ValidationError')) {
                let message = ''
                err.details.forEach(d => {
                    message += `${d.message} <br>`
                })
                err.message = message
            }
            next(err)
        }
    }
}
