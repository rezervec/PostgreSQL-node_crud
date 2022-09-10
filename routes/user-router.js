const Router = require('express')
const router = new Router()
const userController = require('../controllers/user-controller')

var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })


router.post('/', urlencodedParser, userController.createUser)
router.get('/', userController.getUsers)
router.get('/:id', userController.getOneUser)
router.delete('/:id', urlencodedParser, userController.deleteUser)
router.put('/:id&:name&:surname', urlencodedParser, userController.updateUser)


module.exports = router