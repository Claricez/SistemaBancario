const mongoose= require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  cpf: String,
  senha: String,
  agencia: Number,
  conta: Number,
})

module.exports = mongoose.model('User',UserSchema)