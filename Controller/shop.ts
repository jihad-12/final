import { Request, Response } from "express";
import { Hotline } from "../Database/entity/Hotline.js";
import { Shop } from "../Database/entity/Shop.js";
import { AppError } from "../Errors/Error.js";

const getAllShops = async (req: Request, res: Response) => {
  const shops = await Shop.find();
  if (shops) {
    res.status(200).json({
      message: "getting All Shops Successfully",
      status: true,
      shops: shops,
    });
  }
};

const getSingleShop = async (shopId: any) => {
  const shop = await Shop.findOne({ where: { id: shopId } });

  if (!shop) {
    throw new AppError("Shop not found", 404 );
  }

  return shop;
};

const createShop = async (payload: Shop, hotlineId: number) => {
  const shop = await Shop.findOne({ where: { id: payload.id } });

  if (shop) {
    throw new AppError("Shop already exists", 409 );
  }

  const hotline = await Hotline.findOne({ where: { id: hotlineId } });
  if (!hotline) {
    throw new AppError("hotline does not exists", 404 );
  }

  const newShop = new Shop()


  return newShop;
};

export { createShop, getAllShops, getSingleShop };