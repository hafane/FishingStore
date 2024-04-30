const Router = require('express')
const router = new Router()
const itemRouter = require('./itemRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')
const basketItemRouter = require('./basketItemRouter')
const ratingRouter = require('./ratingsRouter')


router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/item', itemRouter)
router.use('/basketItem', basketItemRouter)
router.use('/rating', ratingRouter)

module.exports = router