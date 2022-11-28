const User = require('../models/User');

module.exports = {
  //Login de usuário
async index(request, response) {
  const {agencia,conta,senha} = request.body

const user = await User.findOne({agencia,conta,senha});

if(!user) {
  return response.status(400).json({error : 'Esse usuério não existe'})
}

return response.json(user)
},
}