import { Schema, model } from 'mongoose';

const ProductSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String },
  shopId: { type: Schema.Types.ObjectId, ref: 'Shop' }
});

export default model('Product', ProductSchema);