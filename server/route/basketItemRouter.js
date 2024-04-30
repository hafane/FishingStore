const Router = require('express')
const router = new Router()
const basketItemController = require('../controllers/basketItemController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole(('ADMIN') || ('USER')), basketItemController.create)
router.get('/',  checkRole(('ADMIN') || ('USER')), basketItemController.getAll)
router.delete('/', checkRole(('ADMIN') || ('USER')), basketItemController.delete)

module.exports = router