import { Schema, model } from 'mongoose';

const ShopSchema = new Schema<{name: string}>({
  name: { type: String, unique: true, required: true },
});

export default model('Shop', ShopSchema);