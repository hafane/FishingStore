const Router = require('express')
const router = new Router()
const basketItemController = require('../controllers/basketItemController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole(['USER', 'ADMIN']), basketItemController.create)
router.get('/',  checkRole(['USER', 'ADMIN']), basketItemController.getAll)
router.delete('/', checkRole(['USER', 'ADMIN']), basketItemController.delete)
router.delete('/all', checkRole('ADMIN'), basketItemController.deleteItemId)

module.exports = router