import { Request, Response } from 'express'

import winston from 'winston'

const logger = winston.createLogger({
    level: 'silly', // ログレベル
    transports: [
        new winston.transports.Console() // どこにログ出しをするのか
    ]
})

export function helloWorld(_: Request, res: Response) {
    logger.error('errorのメッセージ')
    logger.warn('warnのメッセージ')
    logger.info('infoのメッセージ')
    logger.verbose('verboseのメッセージ')
    logger.debug('debugのメッセージ')
    logger.silly('sillyのメッセージ')
    try {
        res.status(200)
        res.send('Hello World')
    } catch (err) {
        res.status(500)
        res.send(err)
    }
}

exports.loggingWithWinston = async (_: Request, res: Response) => {
    logger.error('errorのメッセージ')
    logger.warn('warnのメッセージ')
    logger.info('infoのメッセージ')
    logger.verbose('verboseのメッセージ')
    logger.debug('debugのメッセージ')
    logger.silly('sillyのメッセージ')

    res.send('OK')
}