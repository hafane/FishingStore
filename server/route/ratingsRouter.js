const Router = require('express')
const router = new Router()
const ratingController = require('../controllers/ratingsController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('USER'), ratingController.create)
router.get('/', ratingController.getAll)
router.delete('/', checkRole('USER'), ratingController.delete)

module.exports = router