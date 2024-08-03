
import { Request, Response } from "express";
import { Hotline } from "../Database/entity/Hotline.js";
import { AppError } from "../Errors/Error.js";

const getAllHotline = async (req: Request, res: Response) => {
  const hotlines = await Hotline.find();
  if (hotlines) {
    res.status(200).json({
      message: "getting All hotlines Successfully",
      status: true,
      hotlines: hotlines,
    });
  }
};

const getSingleHotline = async (hotlineId: any) => {
  const hotline = await Hotline.findOne({ where: { id: hotlineId } });

  if (!hotline) {
    throw new AppError("hotline not found", 404  );
  }

  return hotline;
};

const createHotline = async (hotline: Hotline) => {
  const hotlineExists = await Hotline.findOne({
    where: { id: hotline.id },
  });

  if (hotlineExists) {
    throw new Error("Hotline already exists");
  }

  const newHotline = await Hotline.create(hotline).save();

  return newHotline;
};

export { createHotline, getAllHotline, getSingleHotline };