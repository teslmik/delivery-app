import { Schema, model } from 'mongoose';

const OrderSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  products: {type: Object, required: true},
  totalPrice: { type: Number, required: true },
}, {
  timestamps: true,
});

export default model('Order', OrderSchema);