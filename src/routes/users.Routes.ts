import { Router } from "express";
import { createUserController, getUserController } from "../controllers/users.Controllers";
import { authMiddleware } from "../middlewares/auth.Middleware";

export const userRoutes = Router()

userRoutes.post('', createUserController)
userRoutes.get('', getUserController)
