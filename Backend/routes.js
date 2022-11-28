const {Router} = require('express')
const User = require('./controller/UserController')
const sessionController = require('./controller/sessionController')

const routes = Router();

routes.post('/user', User.create)

routes.get('/user', User.index)
routes.post('/session', sessionController.index)

module.exports = routes;