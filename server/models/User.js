const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  //mail: {type: String, unique:true},
  puntuation: Number,
  role: {type: String, enum: ["principiante", "intermedio", "profesional"]},
  description: String,
  //campus: { type: String, enum: ['Madrid', 'Barcelona', 'Miami', 'Paris', 'Berlin', 'Amsterdam', 'Mexico', 'Sao Paulo'] },
  //course: { type: String, enum: ['WebDev', 'UX/UI', 'Data Analytics'] },
  imgPath: {type: String, default: 'https://res.cloudinary.com/drlexgkiu/image/upload/v1544976860/avatar_2x.png'},
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;