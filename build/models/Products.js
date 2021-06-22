import { Schema, model } from 'mongoose';
const productSchema = new Schema({
  name: String,
  category: String,
  price: Number,
  photos: Array,
  comment: String,
  userId: String,
  description: String
}, {
  timestamps: true,
  versionKey: false
});
export default model('Products', productSchema);