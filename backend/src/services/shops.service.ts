import ShopModel from "../models/shop.model";

class ShopsService {
  async getAllShops() {
    return await ShopModel.find();
  }
}

export const shopsService = new ShopsService();
