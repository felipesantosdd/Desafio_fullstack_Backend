import { createContactService } from '../services/contacts/createContact.Service';
import { IContact } from './../interfaces/contacts.interfaces';
import { Request, Response } from "express";

export async function createContactController(req: Request, res: Response): Promise<IContact | any> {
    try {
        const contact: IContact = req.body
        const newContact: IContact = await createContactService(contact)

        return res.status(201).json(newContact)
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({
                message: error.message
            })
        }
    }
}

export async function getContactsController(req: Request, res: Response) {
    try {


    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({
                message: error.message
            })
        }
    }
}