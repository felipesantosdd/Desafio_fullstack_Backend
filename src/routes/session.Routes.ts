import { Router } from "express";
import { LoginController } from "../controllers/session.Controller";



export const SessionRoutes = Router()

SessionRoutes.post('', LoginController)
