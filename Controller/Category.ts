import { Request, Response } from "express";
import { Category } from "../Database/entity/Category.js";


const createCategory = async (category: Category) => {
  const categoryExists = await Category.findOne({
    where: { id: category.id },
  });

  if (categoryExists) {
    throw new Error("category already exists");
  }

  const newCategory = await Category.create(category).save();

  return newCategory;
};

const getAllCategories = async (req: Request, res: Response) => {
  const categories = await Category.find();
  if (categories) {
    res.status(200).json({
      message: "getting All categories Successfully",
      status: true,
      products: categories,
    });
  }
};

export { createCategory, getAllCategories };
