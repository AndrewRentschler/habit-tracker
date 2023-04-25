import { Router } from 'express'
import * as habitsCtrl from '../controllers/habits.js'
import { isLoggedIn } from '../middleware/middleware.js'


const router = Router()

// GET localhost:3000/habits
router.get('/', habitsCtrl.index)
router.get('/allHabits', isLoggedIn, habitsCtrl.allHabits)
router.get('/:habitId', isLoggedIn, habitsCtrl.show)
router.get('/:habitId/edit', isLoggedIn, habitsCtrl.edit)
// router.get('/:habitId/update', isLoggedIn, habitsCtrl.update)

// POST localhost:3000/habits
router.post('/', isLoggedIn, habitsCtrl.create)

export { router }
