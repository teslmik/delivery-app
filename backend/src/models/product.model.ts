import { Schema, model } from 'mongoose';

const ProductSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  shopId: { type: Schema.Types.ObjectId, ref: 'Shop' }
});

export default model('Product', ProductSchema);