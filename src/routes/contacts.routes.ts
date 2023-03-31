import { Router } from "express";
import { createContactController, getContactsController } from "../controllers/contacts.Controllers";


export const ContactRoutes = Router()

ContactRoutes.post('', createContactController)
ContactRoutes.get('', getContactsController)
