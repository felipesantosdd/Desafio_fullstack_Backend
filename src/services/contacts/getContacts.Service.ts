import { FindManyOptions } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts";

export async function getContactsService(req): Promise<any> {
    const logedUser = req.user.id

    const contactRepository = AppDataSource.getRepository(Contact)

    const contacts = await contactRepository.find({
        where: {
            user: { id: logedUser }
        }
    })

    return contacts
}
