import winston from 'winston'

export default winston.createLogger({
    transports: [
        new winston.transports.File({
            level: 'info',
            filename: 'filelog-info.log',
            json: true,
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json()
            ),
        }),
        new winston.transports.File({
            level: 'error',
            filename: 'filelog-error.log',
            json: true,
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json()
            ),
        }),
    ],
})
