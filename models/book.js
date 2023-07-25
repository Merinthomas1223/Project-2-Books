const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  comment: {
    type: String,
    required: true
  },
  rating: {
    type:Number,
    min:1,
    max:10,
    default:10
  }, 
}, {
  timestamps: true})

const bookSchema = new Schema({
  image:String,
  title: String,
  publishedYear: Number,
  genre: String,
  reviews: [reviewSchema]
},
{
  timestamps: true
});
bookSchema.static('getAll', function() {
  return this.find();
  });
// Compile the schema into a model and export it
module.exports = mongoose.model('Book', bookSchema);