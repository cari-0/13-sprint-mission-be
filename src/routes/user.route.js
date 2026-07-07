import express from "express";
import {
  getMe,
  updateMe,
  updateMePassword,
  getMeProducts,
  getMeFavorites,
} from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get("/me", getMe);
userRouter.patch("/me", updateMe);
userRouter.patch("/me/password", updateMePassword);
userRouter.get("/me/products", getMeProducts);
userRouter.get("/me/favorites", getMeFavorites);

export default userRouter;
