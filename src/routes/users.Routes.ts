import { Router } from "express";
import { createUserController, getUserController } from "../controllers/users.Controllers";

export const userRoutes = Router()

userRoutes.post('', createUserController)
userRoutes.get('', getUserController)
