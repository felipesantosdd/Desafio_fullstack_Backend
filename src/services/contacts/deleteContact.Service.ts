import { Response } from "express";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts";
import { IContact } from "../../interfaces/contacts.interfaces";
import { User } from "../../entities/user";

export const deleteContactService = async (contactId: string, userId: string, res: Response) => {
    const contactRepository = AppDataSource.getRepository(Contact);

    const contact: IContact | any = await contactRepository.findOne({
        relations: ['user'],
        where: {
            id: contactId
        }
    });

    if (!contact) {
        return res.status(409).json({ message: "Este contato não existe" });
    }

    console.log(contact.user.id);
    console.log(userId)

    if (contact?.user?.id !== userId) {
        return res.status(409).json({ message: "Você não tem permissão para executar esta ação" });
    }

    await contactRepository.remove(contact);

    return res.status(204).send();
};
