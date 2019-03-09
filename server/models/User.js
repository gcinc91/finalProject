const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  mail: {type: String, unique:true},
  puntuation: {type: Number, default: 0},
  description: String,
  selectedOptionDeveloper: {type: Array, default: {value: ''}},
  selectedOptionSysAdmin: {type: Array, default: {value: ''}},
  clasesPendientes: {type: Array, default:['']},
  imgPath: {type: String, default: 'http://imageneslindasparadescargar.com/wp-content/uploads/2016/08/fotos-perfil-whatsapp-graciosas.jpg'},
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;