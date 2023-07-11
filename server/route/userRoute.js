const router = require('express').Router()
const userController = require('../controller/userController')
const {verifyAccessToken, verifyAdmin} = require('../controller/verifyTokenMiddleware')

router.get('/', verifyAccessToken , userController.getAllUser)

router.delete('/:id',[verifyAccessToken, verifyAdmin] ,userController.deleteUser)

module.exports = router