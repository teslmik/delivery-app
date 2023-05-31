import { Schema, model } from 'mongoose';

const UserOrderSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  phone: { type: String, unique: true, required: true },
  address: { type: String, required: true },
  totalPrice: { type: Number, required: true },
});

export default model('UserOrder', UserOrderSchema);