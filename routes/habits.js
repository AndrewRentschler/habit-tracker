import { Router } from 'express'
import * as habitsCtrl from '../controllers/habits.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/habits
router.get('/', habitsCtrl.index)

router.get('/:habitId/edit', isLoggedIn, habitsCtrl.edit)


// POST localhost:3000/habits
router.post('/', isLoggedIn, habitsCtrl.create)

// PATCH localhost:3000/habits
router.patch('/:habitId/resetStreak', isLoggedIn, habitsCtrl.resetStreak)
router.patch('/:habitId/changeName', isLoggedIn, habitsCtrl.changeName)
router.patch('/:habitId', isLoggedIn, habitsCtrl.update)

router.delete('/:habitId', isLoggedIn, habitsCtrl.delete)

export { router }