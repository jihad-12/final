import { Request, Response } from "express";
import { AppError } from "../Errors/Error.js";
import { In } from "typeorm";
import { Product } from "../Database/entity/Product.js";
import { Shop } from "../Database/entity/Shop.js";
import { Category } from "../Database/entity/Category.js";

const getAllProducts = async (req: Request, res: Response) => {
  const products = await Product.find();
  if (products) {
    res.status(200).json({
      message: "getting All Products Successfully",
      status: true,
      products: products,
    });
  }
};

const getProductById = async (productId: any) => {
  const product = await Product.findOne({ where: { id: productId } });

  if (!product) {
    throw new AppError("Product not found", 404 );
  }

  return product;
};

const createProduct = async (
  productFromPostman: Product,
  shopId: number,
  categoriesIds: number[]
) => {
  const shop = await Shop.findOne({ where: { id: shopId } });

  if (!shop) {
    throw new AppError("shop does not exist", 404 );
  }

  const categories = await Category.find({ where: { id: In(categoriesIds) } });
  if (categories.length !== categoriesIds.length) {
    throw new AppError("Some categories are not exists", 404);
  }

  const product = await Product.findOne({
    where: { name: productFromPostman.name, shop: shop },
  });
  if (product) {
    throw new AppError("product already exists", 409 );
  }
  const newProduct = new Product()
  newProduct.name = productFromPostman.name
  newProduct.price = productFromPostman.price
  newProduct.shop = shop
  newProduct.Categories = categories
  // const newProduct = Product.create({
  //   ...productFromPostman,
  //      shop,
  //   categories,
  // });
  return newProduct.save();
  
};

export { getAllProducts, createProduct, getProductById };
