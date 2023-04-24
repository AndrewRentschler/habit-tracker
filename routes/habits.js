import { Router } from 'express'
import * as habitsCtrl from '../controllers/habits.js'
import { isLoggedIn } from '../middleware/middleware.js'


const router = Router()

// GET localhost:3000/habits
router.get('/', habitsCtrl.index)
router.get('/:habitId', habitsCtrl.show)
router.get('/:habitId/edit', isLoggedIn, habitsCtrl.edit)

// POST localhost:3000/habits
router.post('/', isLoggedIn, habitsCtrl.create)

export { router }
