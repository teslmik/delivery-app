import { Schema, model } from 'mongoose';

const ProductOrderSchema = new Schema({
  orderId: { type: Schema.Types.ObjectId, ref: 'UserOrder' },
  productId: { type: Schema.Types.ObjectId, ref: 'Product' },
  count: { type: Number, required: true },
});

export default model('ProductOrder', ProductOrderSchema);