import ProductModel from "../models/product.model";

class ProductsService {
  async getProductByShopId(shopId: string) {
    return await ProductModel.find({ shopId });
  }
}

export const productsService = new ProductsService();