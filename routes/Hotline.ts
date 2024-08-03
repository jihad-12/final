import  { Request, Response, NextFunction } from "express";
import { Router } from "express";
import {createHotline, getAllHotline, getSingleHotline,} from "../Controller/Hotline.js";

const router = Router();

router.get("/", getAllHotline);

router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const hotlineId = Number(req.params.id);
    const hotline = await getSingleHotline(hotlineId);

    res.status(200).json({
      message: "success",
      hotline: hotline,
    });
  } catch (error) {
    console.log("error: " + error);
    next(error);
  }
});

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.body.hotlineNumber) {
      return res.status(400).json({
        message: "some fields are missing",
        success: false,
      });
    }

    const newHotline = await createHotline(req.body);

    res.status(201).json({
      message: "Address created successfully",
      success: true,
      data: newHotline,
    });
  } catch (error) {
    next(error);
  }
});

export default router;