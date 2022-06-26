import { Request, Response, NextFunction, Router } from 'express'
export const PingController: Router = Router()

PingController.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).send({ data: 'Ping' })
  } catch (error) {
    next(error)
  }
})
