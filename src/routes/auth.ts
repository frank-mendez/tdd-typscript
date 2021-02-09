import { Router, Request, Response, NextFunction } from 'express'

const router: Router = Router()

//@route GET /auth
//@desc Authenticate user
//@access PUBLIC

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send(200)
})

export default router
