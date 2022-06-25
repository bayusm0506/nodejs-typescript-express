import { Request, Response, NextFunction, Router } from 'express'
export const IndexController: Router = Router()

IndexController.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).send({ data: 'Hello World!' })
  } catch (error) {
    next(error)
  }
})
