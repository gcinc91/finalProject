const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  mail: {type: String, unique:true},
  puntuation: {type: Number, default: 0},
  description: String,
  selectedOptionDeveloper: Object,
  selectedOptionSysAdmin: Object,
  imgPath: {type: String, default: 'https://res.cloudinary.com/drlexgkiu/image/upload/v1544976860/avatar_2x.png'},
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;