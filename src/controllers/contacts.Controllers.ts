import { createContactService } from '../services/contacts/createContact.Service';
import { deleteContactService } from '../services/contacts/deleteContact.Service';
import { getContactsService } from '../services/contacts/getContacts.Service';

import { IContact } from './../interfaces/contacts.interfaces';
import { Request, Response } from "express";

export async function createContactController(req: Request, res: Response): Promise<IContact | any> {
    try {
        const newContact: IContact = await createContactService(req)

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
        const contacts = await getContactsService(req)
        return res.status(200).json(contacts)

    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({
                message: error.message
            })
        }
    }
}

export async function deleteContactController(req: Request | any, res: Response) {
    try {

        const contactId = req.params.id
        const userid = req.user.id

        await deleteContactService(contactId, userid, res)

        return res.status(204)

    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({
                message: error.message
            })
        }
    }
}