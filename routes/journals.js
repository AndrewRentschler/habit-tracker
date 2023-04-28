import { Router } from 'express'
import * as journalCtrl from '../controllers/journals.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/journals
router.get('/', journalCtrl.journals)

router.get('/journals', isLoggedIn, journalCtrl.journals)
// router.get('/:journalId', isLoggedIn, journalCtrl.show)
router.get('/:journalId/edit', isLoggedIn, journalCtrl.edit)

// POST localhost:3000/journals
router.post('/', isLoggedIn, journalCtrl.create)

export { router }