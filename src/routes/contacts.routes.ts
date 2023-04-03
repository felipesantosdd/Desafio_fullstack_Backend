import { Router } from "express";
import { createContactController, deleteContactController, getContactsController } from "../controllers/contacts.Controllers";
import { authMiddleware } from "../middlewares/auth.Middleware";


export const ContactRoutes = Router()

ContactRoutes.post('', authMiddleware, createContactController)
ContactRoutes.get('', authMiddleware, getContactsController)
ContactRoutes.delete('/:id', authMiddleware, deleteContactController)
