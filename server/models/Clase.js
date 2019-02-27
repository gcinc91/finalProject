const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const claseSchema = new Schema({
  name: String,
  id_user_teacher: {type:Schema.Types.ObjectId, ref:'User'},
  description: String,
  capacity:{type: Number, default: 1},
  date: Date,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});


const Clase = mongoose.model('Clase', claseSchema);
module.exports = Clase;