import { Contact } from "../../entities/contacts";
import { AppError } from "../../error/error";
import { IContact } from "../../interfaces/contacts.interfaces";
import { AppDataSource } from "../../data-source";

export async function createContactService(data: IContact): Promise<IContact> {
    const contactRepository = AppDataSource.getRepository(Contact)

    const email = data.email
    const phone = data.phone

    const emailUnavailable = await contactRepository.findOneBy({ email: email })

    const phoneUnavailable = await contactRepository.findOneBy({ phone: phone })

    if (emailUnavailable) {
        throw new AppError("Ja existe um usuario com esse email", 409)
    }

    if (phoneUnavailable) {
        throw new AppError("Ja existe um usuario com esse Telefone", 409)
    }

    const newContact: IContact = contactRepository.create(data)
    await contactRepository.save(newContact)

    return newContact
}