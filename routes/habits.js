import { Router } from 'express'
import * as habitsCtrl from '../controllers/habits.js'
import * as journalCtrl from '../controllers/journals.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/habits
router.get('/', habitsCtrl.index)

router.get('/journals', isLoggedIn, journalCtrl.journals)
router.get('/:habitId', isLoggedIn, habitsCtrl.show)
router.get('/:habitId/edit', isLoggedIn, habitsCtrl.edit)


// POST localhost:3000/habits
router.post('/', isLoggedIn, habitsCtrl.create)
router.post('/newJournal', isLoggedIn, journalCtrl.create)

// PATCH localhost:3000/habits
router.patch('/:habitId/resetStreak', isLoggedIn, habitsCtrl.resetStreak)
router.patch('/:habitId/changeName', isLoggedIn, habitsCtrl.changeName)
router.patch('/:habitId', isLoggedIn, habitsCtrl.update)

export { router }