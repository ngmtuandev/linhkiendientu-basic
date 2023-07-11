const router = require('express').Router()
const userController = require('../controller/userController')

router.get('/', userController.getAllUser)

router.delete('/:id', userController.deleteUser)

module.exports = router