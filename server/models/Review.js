const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const reviewSchema = new Schema({
  username: {type:Schema.Types.ObjectId, ref:'User'},
  id_user_profesor:  {type:Schema.Types.ObjectId, ref:'User'},
  rating: Number,
  description: String,
  }, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;