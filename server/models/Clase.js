const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const claseSchema = new Schema({
  name: String,
  id_user_teacher: String,
  description: String,
  capacity:Number,
  date: Date,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});


const Clase = mongoose.model('Clase', claseSchema);
module.exports = Clase;