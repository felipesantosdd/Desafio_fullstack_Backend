import { Router } from "express";
import { LoginController, tokenValidateController } from "../controllers/session.Controller";



export const SessionRoutes = Router()

SessionRoutes.post('', LoginController)
SessionRoutes.post('/validate', tokenValidateController)
