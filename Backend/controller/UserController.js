const User = require('../models/User');

module.exports = {
    
async index(request, response) {
const users = await User.find();

return response.json(users)
},

  async create(request, response) {
    //Criação de usuários
    const {name, cpf, senha} = request.body;

    let user = await User.findOne({cpf});
      if(user) {
        return response.status(409).json({error : 'Esse usuário já existe'})
      }
    if(!user) {
      user = await User.create({name,cpf,senha})
    } 
    
   return response.json(user)
  }
}