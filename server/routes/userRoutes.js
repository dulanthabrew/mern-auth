import express from "express";
import userAuth from "../middleware/userAuth.js";
import { get } from "mongoose";
import { getUserData } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/data", userAuth, getUserData);

export default userRouter;
